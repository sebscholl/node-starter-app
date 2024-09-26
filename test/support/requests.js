
async function fetcher(path, options = {}) {
  const response = await fetch(`http://localhost:3000${path}`, options);
  const contentType = response.headers.get('content-type');

  let data;

  if (contentType.match(/application\/json/)) {
    data = await response.json();
  }

  return {
    data,
    response,
    status: response.status,
  };
}

export default function (appInstance) {
  appInstance.test ||= {};
  appInstance.test.fetcher = fetcher;
}