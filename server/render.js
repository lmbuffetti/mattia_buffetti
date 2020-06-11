import fs from 'fs'
import path from 'path'
import React, { Suspense } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable'
import { Provider } from "react-redux"
import { Frontload, frontloadServerRender } from 'react-frontload'
import { configureStore } from '../src/store';
import App from '../src/App.jsx'
import manifest from '../dist/manifest.json'
const injectHTML = (data, { htmlAttrs, bodyAttrs, content, title, meta, link, scripts, styles, state }) => {
  if(htmlAttrs)
    data = data.replace(/<html .*?>/, `<html ${htmlAttrs}>`);
  if(title)
    data = data.replace(/<title>.*?<\/title>/g, title);
  if(bodyAttrs)
    data = data.replace("<body>", `<body ${bodyAttrs}>`);
  if(meta)
    data = data.replace('</head>', `${meta}</head>`);
  if(link)
    data = data.replace('</head>', `${link}</head>`);

  if(scripts)
    data = data.replace('</body>', scripts.join('') + '</body>');

  if(styles)
    data = data.replace('</body>', styles.join('') + `</body>`);

  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${content}${state ? `<script>window.__initialData__ = ${state}</script>` : ''}</div>`
  );
  return data;
};
const htmlData = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
const extractAssets = (assets, chunks) =>
  Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '').replace('.css', '')) > -1)
    .map(k => assets[k]);
export default (req, res) => {

  const context = {};
  const modules = [];
  const store = configureStore;
  //isomorphic cookie
  global.document = {
    cookie: req.headers.cookie
  };
  frontloadServerRender(() =>
    renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            <Frontload isServer={true}>
              <App />
            </Frontload>
          </StaticRouter>
        </Provider>
      </Loadable.Capture>
    )
  ).then(content => {
    if(context.url) {
      res.redirect(context.url);
      return res.end()
    }

    const styleChunks = [];
    const scriptChunks = [];
    extractAssets(manifest, modules).map(
      c => {
        if(/(.*)\.js/.test(c))
          scriptChunks.push(`<script type="text/javascript" src="/${c.replace(/^\//, '')}"></script>`);

        if(/(.*)\.css/.test(c))
          styleChunks.push(`<link rel="stylesheet" href="/${c.replace(/^\//, '')}">`);

        return;
      }
    );
    const helmet = Helmet.renderStatic();
    const htmlAttrs = helmet.htmlAttributes.toString();
    const bodyAttrs = helmet.bodyAttributes.toString();
    const html = injectHTML(htmlData, {
      htmlAttrs,
      bodyAttrs,
      content,
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      scripts: scriptChunks,
      styles: styleChunks,
      state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
    });
    res.send(html)
  })
}
