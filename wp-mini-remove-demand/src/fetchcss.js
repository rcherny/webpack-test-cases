export const fetchCSS = file => {
  // https://web.dev/articles/constructable-stylesheets
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet
  const newStyles = new CSSStyleSheet();
  return fetch(file)
    .then(res => res.text())
    .then(css => {
      newStyles.replace(css);
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets
      document.adoptedStyleSheets.push(newStyles);
      return true;
    });
};
