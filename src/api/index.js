const fetchJson = (url) => {
  return fetch('http://127.0.0.1:8080/' + url).then((resp) => {
    return resp.json();
  });
};
export { fetchJson };
