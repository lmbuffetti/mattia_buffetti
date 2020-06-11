import bodyParser from 'body-parser';
import express from 'express';
import render from './render';
const compression = require('compression');
const app = express();
let PORT;
const url = process.env.name;
if (url && url.indexOf('dev') !== -1) PORT = 46132;
else if (url && url.indexOf('stag') !== -1) PORT = 46131;
else PORT = 46130;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
//bloqueia o acesso ao arquivo de servidor
app.use('/server.js', (req, res) => {
  res.status(404).send();
});
//bloqueia o static renderizar o index.html antes do ssr
app.get('/', render);
//arquivos estaticos
app.use(express.static(__dirname + '/'));
// renderiza react para todas outras urls
app.use(render);
app.listen(PORT, console.log(`App listening on port ${PORT} ${__dirname}!`));
