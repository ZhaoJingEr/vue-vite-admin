/**
 * get random ID
 * @param null
 * @returns {string}
 */
export function genId() {
  const charts = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let result = '';
  for (let i = 0; i < 12; i++) {
    let rendNum = Math.floor(Math.random() * charts.length);
    result += charts[rendNum];
  }

  return result;
}

export function loadJS(id, src) {
  return new Promise((resolve) => {
    var scriptTag = document.getElementById(id);
    if (scriptTag) {
      if (scriptTag.getAttribute('class') === 'hasLoad') {
        return resolve();
      } else {
        setTimeout(() => {
          return resolve();
        }, 300);
      }
    } else {
      var oScript = document.createElement('script');
      oScript.id = id;
      oScript.type = 'text/javascript';
      oScript.src = src;
      document.body.appendChild(oScript);
      oScript.onload = oScript.onreadystatechange = function () {
        if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
          console.log('加载完成');
          oScript.setAttribute('class', 'hasLoad');
          resolve();
        }
        oScript.onload = oScript.onreadystatechange = null;
      };
    }
  });
}
