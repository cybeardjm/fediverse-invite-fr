const getUrlParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  const value = urlParams.get(param);

  return value;
};

const setUrlParam = (param, value) => {
  const regex = new RegExp(`([?&]${param}=)[^&]*`);
  const newUrl = window.location.href.match(regex)
    ? window.location.href.replace(regex, `$1${value}`)
    : `${window.location.href}${window.location.search ? "&" : "?"}${param}=${value}`;
  window.history.replaceState(null, "", newUrl);
};

export { getUrlParam, setUrlParam };
