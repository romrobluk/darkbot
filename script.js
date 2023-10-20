function add_bot() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const ccode = urlParams.get('code');
  window.location.replace(ccode);
}
