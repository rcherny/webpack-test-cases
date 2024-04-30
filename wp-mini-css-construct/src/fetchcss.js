/**
 * adopt an imported stylesheet to the document.adoptedStyleSheets array
 *
 * @param      {*}  css     The css to apply
 */
export const adoptCSS = (css) => {
  const newStyles = new CSSStyleSheet();
  newStyles.replace(css);
  document.adoptedStyleSheets.push(newStyles);
};

/**
 * Fetches a css stylesheet and adopts it to the document.adoptedStyleSheets array.
 *
 * @param      {string}  file    The file url
 * @return     {boolean}  true or false
 */
export const fetchCSS = (file) => {
  // https://web.dev/articles/constructable-stylesheets
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet
  const newStyles = new CSSStyleSheet();
  return fetch(file)
    .then((res) => res.text())
    .then((css) => {
      newStyles.replace(css);
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets
      document.adoptedStyleSheets.push(newStyles);
      return true;
    });
};
