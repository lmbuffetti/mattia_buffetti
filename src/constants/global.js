export const configLang = {
  ch: {
    code: 'de',
    name: 'Deutsch',
    short: 'De',
    localString: 'de-CH',
    currency: 'CHF',
    address: {
      name: 'Brixel AG',
      adr: ['Ernastrasse 22, 8004 Zurich, Switzerland'],
    },
    social: {
      facebook: 'https://www.facebook.com/brixel.ch/',
      instagram: 'https://www.instagram.com/brixel_hq/',
      twitter: 'https://twitter.com/brixel_hq',
      linkedin: 'https://www.linkedin.com/company/brixel-ag/',
    },
    convertUnit: {
      sqm: 'm2',
    },
  },
  en: {
    code: 'en',
    name: 'English',
    short: 'En',
    localString: 'en-GB',
    currency: 'EUR',
    convertUnit: {
      sqm: 'm2',
    },
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    short: 'PT',
    localString: 'pt-BR',
    currency: 'EUR',
    address: {
      name: 'Brixel',
      adr: ['Av. da República 6, 1º Esquerdo, 1050-191 Lisboa'],
    },
    social: {
      facebook: 'https://www.facebook.com/brixel.portugal/',
      instagram: 'https://www.instagram.com/brixel_portugal/',
    },
    convertUnit: {
      sqm: 'm2',
    },
  },
};

// DEV SETTINGS
export const config = (domain = 'ch') => ({
  dev: {
    apiRoot: `https://dev-api.brixel.${domain}/api/v3`,
    brixelatorRoot: `https://dev-brixelator.brixel.${domain}/api`,
    shortPath: `https://dev-api.brixel.${domain}`,
    apiPath: `https://dev-api.brixel.${domain}`,
    pageUrl: `https://dev-page.brixel.${domain}/`,
    homepageUrl: `https://brixel.${domain}/`,
    signupUrl: `https://dev-login.brixel.${domain}/signup`,
    loginUrl: `https://dev-login.brixel.${domain}/login`,
    loginBasePath: `https://dev-login.brixel.${domain}`,
    editorPath: `https://dev-dashboard.brixel.${domain}`,
    dashboardPath: `https://dev-dashboard.brixel.${domain}`,
    priceGuarantee: `https://brixel.${domain}/brixel-price-guarantee/`,
    buyUrl: `https://brixel.${domain}/kaufen/`,
    buyUrlDe: `https://brixel.${domain}/kaufen/`,
    sellUrl: `https://brixel.${domain}/verkaufen/`,
    sellUrlDe: `https://brixel.${domain}/verkaufen/`,
    estimationUrl: `https://brixel.${domain}/bewerten/`,
    aboutUsLink: `https://brixel.${domain}/about-us`,
    marketUrl: `https://dev-market.brixel.${domain}`,
    googleLocation: 'https://maps.googleapis.com/maps/api/geocode',
    googleAnalyticsId: 'UA-76350745-3',
    googleTagManager: 'GTM-T2D4XNW',
    googleMaps: 'AIzaSyD4tV7awt_UqVqk0vhyk3_zKi_RN--br5w',
    googleMapsGeocoderKey: 'AIzaSyD4tV7awt_UqVqk0vhyk3_zKi_RN--br5w',
    transifexId: 'e86c750b39de4c7e8c36a3b1ab7f98af',
    transifexToken: '1/57348d40c1dcd3328d5ff327a88bba3705d5d61a',
    hideLog: false,
    facebookPixel: '1803717239894086',
    mixpanelId: '460b9387e3ff8b54da7bd974141e0f02',
    profileURL: 'https://dev-login.brixel.ch/account/profile',
    messageTypeID: {
      contact: '5af32211ab72d0ca6a857361',
      schedule: '5af32211ab72d0ca6a857362',
      offer: '5af32211ab72d0ca6a857363',
    },
    domain,
    config: configLang[domain],
  },
  staging: {
    apiRoot: `https://stage-api.brixel.${domain}/api/v3`,
    brixelatorRoot: `https://brixelator.brixel.${domain}/api`,
    shortPath: `https://stage-api.brixel.${domain}`,
    apiPath: `https://stage-api.brixel.${domain}`,
    pageUrl: `https://stage-page.brixel.${domain}/`,
    homepageUrl: `https://brixel.${domain}/`,
    signupUrl: `https://stage-login.brixel.${domain}/signup`,
    loginUrl: `https://stage-login.brixel.${domain}/login`,
    loginBasePath: `https://stage-login.brixel.${domain}`,
    editorPath: `https://stage-dashboard.brixel.${domain}`,
    dashboardPath: `https://stage-dashboard.brixel.${domain}`,
    priceGuarantee: `https://brixel.${domain}/brixel-price-guarantee/`,
    buyUrl: `https://brixel.${domain}/kaufen/`,
    buyUrlDe: `https://brixel.${domain}/kaufen/`,
    sellUrl: `https://brixel.${domain}/verkaufen/`,
    sellUrlDe: `https://brixel.${domain}/verkaufen/`,
    estimationUrl: `https://brixel.${domain}/bewerten/`,
    aboutUsLink: `https://brixel.${domain}/about-us`,
    marketUrl: `https://stage-market.brixel.${domain}`,
    googleLocation: 'https://maps.googleapis.com/maps/api/geocode',
    googleAnalyticsId: 'UA-76350745-3',
    googleTagManager: 'GTM-T2D4XNW',
    googleMaps: 'AIzaSyD4tV7awt_UqVqk0vhyk3_zKi_RN--br5w',
    googleMapsGeocoderKey: 'AIzaSyD4tV7awt_UqVqk0vhyk3_zKi_RN--br5w',
    transifexId: 'e86c750b39de4c7e8c36a3b1ab7f98af',
    transifexToken: '1/57348d40c1dcd3328d5ff327a88bba3705d5d61a',
    hideLog: false,
    facebookPixel: '1803717239894086',
    mixpanelId: '460b9387e3ff8b54da7bd974141e0f02',
    profileURL: 'https://stage-login.brixel.ch/account/profile',
    messageTypeID: {
      contact: '584ec9043850e4852d0dbd1a',
      schedule: '584ec9153850e4852d0dbd1f',
      offer: '584ec9283850e4852d0dbd23',
    },
    domain,
    config: configLang[domain],
  },
  production: {
    apiRoot: `https://api.brixel.${domain}/api/v3`,
    brixelatorRoot: `https://brixelator.brixel.${domain}/api`,
    shortPath: `https://api.brixel.${domain}`,
    apiPath: `https://api.brixel.${domain}`,
    pageUrl: `https://page.brixel.${domain}/`,
    homepageUrl: `https://brixel.${domain}/`,
    signupUrl: `https://login.brixel.${domain}/signup`,
    loginUrl: `https://login.brixel.${domain}/login`,
    loginBasePath: `https://login.brixel.${domain}`,
    editorPath: `https://dashboard.brixel.${domain}`,
    dashboardPath: `https://dashboard.brixel.${domain}`,
    priceGuarantee: `https://brixel.${domain}/brixel-price-guarantee/`,
    marketUrl: `https://market.brixel.${domain}`,
    buyUrl: `https://brixel.${domain}/kaufen/`,
    buyUrlDe: `https://brixel.${domain}/kaufen/`,
    sellUrl: `https://brixel.${domain}/verkaufen/`,
    sellUrlDe: `https://brixel.${domain}/verkaufen/`,
    estimationUrl: `https://brixel.${domain}/bewerten/`,
    aboutUsLink: `https://brixel.${domain}/about-us`,
    googleLocation: 'https://maps.googleapis.com/maps/api/geocode',
    googleAnalyticsId: 'UA-76350745-1',
    googleTagManager: 'GTM-TD3XNTN',
    googleMaps: 'AIzaSyBnoc_7KMBePhoqGnIIN-YtTA6PCgjM968',
    googleMapsGeocoderKey: 'AIzaSyBnoc_7KMBePhoqGnIIN-YtTA6PCgjM968',
    transifexId: 'e86c750b39de4c7e8c36a3b1ab7f98af',
    transifexToken: '1/57348d40c1dcd3328d5ff327a88bba3705d5d61a',
    hideLog: true,
    facebookPixel: '1803717239894086',
    mixpanelId: '460b9387e3ff8b54da7bd974141e0f02',
    profileURL: 'https://login.brixel.ch/account/profile',
    messageTypeID: {
      contact: '58ab252051c9637267e6adec',
      schedule: '58ab252051c9637267e6aded',
      offer: '58ab252051c9637267e6adee',
    },
    domain,
    config: configLang[domain],
  },
});