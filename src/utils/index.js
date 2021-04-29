import { useRef, useEffect } from 'react';

export const timeout = (ms = 1000) => new Promise(resolve => window.setTimeout(resolve, ms));

export const encodeURL = url =>
  String(url)
    .split(' ')
    .join('%20')
    .split('#')
    .join('%23')
    .split('$')
    .join('%24')
    .split('%')
    .join('%25')
    .split('&')
    .join('%26')
    .split('@')
    .join('%40')
    .split('`')
    .join('%60')
    .split('/')
    .join('%2F')
    .split(':')
    .join('%3A')
    .split(';')
    .join('%3B')
    .split('<')
    .join('%3C')
    .split('=')
    .join('%3D')
    .split('>')
    .join('%3E')
    .split('?')
    .join('%3F')
    .split('[')
    .join('%5B')
    .split('\\')
    .join('%5C')
    .split(']')
    .join('%5D')
    .split('^')
    .join('%5E')
    .split('{')
    .join('%7B')
    .split('|')
    .join('%7C')
    .split('}')
    .join('%7D')
    .split('~')
    .join('%7E')
    .split('"')
    .join('%22')
    .split("'")
    .join('%27')
    .split('+')
    .join('%2B')
    .split(',')
    .join('%2C');

export const getRandomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const sanitizeText = str =>
  String(str)
    .replace(/\W/g, '_')
    .toLowerCase();

export const usePreviousProps = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export const printListener = src => {
  if (document.querySelector('.quant-viewpage-loader')) {
    document.querySelector('.quant-viewpage-loader').style.display = 'block';
  }
  const element = document.getElementById('print-frame');
  if (element) {
    element.parentNode.removeChild(element);
  }
  if (src) {
    const url = src; // || `${envConfig.baseUrl}${envConfig.apiEndPoints.assets}?url=${src}`;
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');

    /** check the browser is IE */
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./) || ua.search('Firefox') > -1) {
      const embed = document.createElement('embed');
      embed.id = 'print-frame';
      embed.style.opacity = 0;
      embed.style.width = '2px';
      embed.style.height = '2px';
      embed.type = 'application/pdf';
      embed.src = url;
      document.body.appendChild(embed);
      embed.onload = async () => {
        await timeout(3000);

        if (document.querySelector('.quant-viewpage-loader')) {
          document.querySelector('.quant-viewpage-loader').style.display = 'none';
        }

        const frameEle = document.getElementById('print-frame');
        frameEle.setActive();
        frameEle.focus();
        frameEle.print();
      };
    } else {
      const printFrame = document.createElement('iframe');
      printFrame.id = 'print-frame';
      printFrame.style.display = 'none';
      printFrame.src = url;
      printFrame.type = 'application/pdf';

      document.body.appendChild(printFrame);

      printFrame.onload = async () => {
        await timeout(3000);

        if (document.querySelector('.quant-viewpage-loader')) {
          document.querySelector('.quant-viewpage-loader').style.display = 'none';
        }

        printFrame.contentWindow.print();
      };
    }
  }
};
