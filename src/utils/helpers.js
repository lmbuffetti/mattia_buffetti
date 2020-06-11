import isObject from 'lodash/isObject';
import Cookies from 'universal-cookie';
import { translateTo } from './translation';
import getConfigEnv from '@brixel/brixel-configuration-partner/src/Settings';

const cookies = new Cookies();

export const cutValue = (val) => {
  let formatVal = val;
  if (val > 10000) {
    formatVal = val / 10000;
    formatVal = formatVal % 1 !== 0 ? formatVal.toFixed(2) : formatVal;
    formatVal = `${formatVal}K`;
  }
  if (val > 100000) {
    formatVal = val / 1000000;
    formatVal = formatVal % 1 !== 0 ? formatVal.toFixed(2) : formatVal;
    formatVal = `${formatVal}M`;
  }

  return formatVal;
};

export function formatNum(num, separator, fraction) {
  const convNum = +num;
  let str = convNum.toLocaleString('de-CH');
  str = str.replace(/\./g, separator);
  str = str.replace(/,/g, fraction);
  return str;
}

export function roundHundred(value) {
  return Math.round(value / 100) * 100;
}

export function roundThousand(value) {
  return Math.round(value / 1000) * 1000;
}
export function roundFiveThousand(value) {
  return Math.round(value / 5000) * 5000;
}

export function roundFifty(value) {
  return Math.round(value / 50) * 50;
}

export const loadScript = (src) => {
  const tag = document.createElement('script');
  tag.async = false;
  tag.src = src;
  document.getElementsByTagName('body').appendChild(tag);
};

export const formatDistance = (val) => {
  let newVal = `${val}m`;
  if (+val >= 1000) {
    newVal = `${parseFloat((+val / 1000).toFixed(1))}km`;
  }
  return newVal;
};

export const convertColorToHue = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  const newVal = (hex.replace('#', '0x'));
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  let s;
  let l = (max + min) / 2;

  if (max === min) {
    s = 0;
    h = s; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        // do nothng
    }
    h /= 6;
  }

  s *= 100;
  s = Math.round(s);
  l *= 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  const colorInHSL = `hsl(${h},${s}%,${l}%)`;
  return {
    hex: newVal,
    hsl: colorInHSL,
  };
};

export const capitalizeFirstLetter = (string) => {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
  return '';
};

export const clearUrl = (string) => string.replace(/\/\//g, '/');

export const arrayMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d_names_short = ["Su","Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const formatDate = (date, type = 'extended', lang = 'en') => {
  let formattedDate;
  const curr_day  = date.getDay();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  if (type === 'short') {
    const realMonth = date.getMonth() + 1;
    const monthNum = realMonth < 10 ? `0${realMonth}` : realMonth;
    formattedDate = `${d_names_short[curr_day]}, ${day}-${monthNum}-${year}`;
  } else {
    formattedDate = `${d_names_short[curr_day]}, ${day} ${translateTo(lang, arrayMonth[month])} ${year}`;
  }
  return formattedDate;
};

export const isTablet = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth > 1024) {
      return false;
    }
    return true;
  }
  return false;
};

export const isMobile = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth > 768) {
      return false;
    }
    return true;
  }
  return false;
};

export const compareArray = (array1, array2, action = false) => {
  if (array1 && array2) {
    if (action === false) {
      const array = [];
      array1.map((val) => {
        const checkSameValue = val.types.some((r) => array2.includes(r));
        if (checkSameValue === action) {
          array.push(val);
        }
        return null;
      });
      return array;
    }
  }
  return [];
};

const maxPrice = 5000000;
export const maxPriceRatio = maxPrice / 100;

const maxPriceM2 = 15000;
export const maxPriceM2Ratio = maxPriceM2 / 100;

const maxLivingSpace = 300;
export const maxLivingSpaceRatio = maxLivingSpace / 100;

export const getLocalObject = (obj, el) => {
  if (typeof localStorage !== 'undefined') {
    const allObj = JSON.parse(localStorage.getItem(obj));
    if (isObject(allObj)) {
      return allObj[el];
    }
  }
  return '';
};

export const setLocalObject = (obj, el, val) => {
  if (typeof localStorage !== 'undefined') {
    let allObj = JSON.parse(localStorage.getItem(obj));
    if (isObject(allObj)) {
      allObj[el] = val;
    } else {
      allObj = { [el]: val };
    }
    localStorage.setItem(obj, JSON.stringify(allObj));
  }
  return '';
};

export const getNumElArray = (arr) => {
  let num = 0;
  arr.map((item) => {
    if (Object.keys(item).length > num) {
      num = Object.keys(item).length;
    }
    return null;
  });
  return num;
};

export const getQueryVariableUrl = (url, variable, action = 'normal') => {
  let query;
  if (action === 'full') {
    query = url.split('?');
    if (query[1]) query = query[1];
    else query = query[0];
  } else {
    query = url.replace('?', '');
  }
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return variable;
};

export const sortObjByKey = (obj, key, isBool = false) => {
  let orderedObj = obj;
  if (isBool) {
    orderedObj = obj.sort((a, b) => b[key] - a[key]);
  }
  return orderedObj;
};

export const getDevMode = () => {
  if (typeof window !== 'undefined') {
    const variable = 'dev';
    const url = window.location.href;
    let query = url.split('?');
    if (query[1]) query = query[1];
    else query = query[0];
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i += 1) {
      const pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === variable) {
        return true;
      }
    }
  }
  return false;
};

export const existImgByTag = (arrayImgs, tags) => {
    let curImg = '';
    tags.map((val) => {
      arrayImgs.map((img) => {
        if (img.tags) {
          const filteredImg = img.tags.find((item) => item.toLowerCase() === val.toLowerCase());
          if (filteredImg && !curImg) {
            curImg = `${getConfigEnv.shortPath}${img.path}`;
          }
          if (val === 'second' && !curImg) {
            curImg = `${getConfigEnv.shortPath}${arrayImgs[1].path}`;
          }
        }
        return null;
      });
      return null;
    });
    if (curImg) return true;
    return false;
};

export const Truancate = (text, limit, cutted = false) => {
  let txt = text;
  if (txt.length > limit && !cutted) {
    txt = `${txt.substr(0, limit).replace(/\s+$/, '')}...`;
  } else if (txt.length > limit && cutted) {
    txt = `${txt}`;
  }
  return txt.replace(/(?:\r\n|\r|\n)/g, '<br>');
};

export const imageExists = (image_url) => {

  if (typeof window !== 'undefined') {
    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status !== 404;
  }
  return false;
};

export const setCookie = (key, val) => {
  const host = window.location.host.split('.');
  // var localhost = host[0].match(/localhost/gi);
  const localip = host[0];
  let domain;

  if (localip.includes('localhost')) {
    domain = 'localhost';
  } else if (typeof localip === 'number') {
    domain = '0.0.0.0';
  } else {
    domain = '.brixel.ch';
  }
  const options = {
    domain: domain,
    path: '/',
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    sameSite: 'strict',
  };
  cookies.set(key, val, options);
};

export const unsetCookie = (key) => {
  const host = window.location.host.split('.');
  // var localhost = host[0].match(/localhost/gi);
  const localip = host[0];
  let domain;
  if (localip.includes('localhost')) {
    domain = 'localhost';
  } else if (typeof localip === 'number') {
    domain = '0.0.0.0';
  } else {
    domain = '.brixel.ch';
  }
  const options = {
    domain: domain,
    path: '/',
  };
  cookies.remove(key, options);
};
