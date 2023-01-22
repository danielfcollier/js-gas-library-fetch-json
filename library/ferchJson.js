// --------------------------------------------------------------------------------------------------
function request(method, options) {
  const headers = options.headers;

  return { method, headers };
}
// --------------------------------------------------------------------------------------------------
function Get(url, options = { verbose: false }) {
  const params = request("get", options);

  serviceLogger(options, { url });

  const response = UrlFetchApp.fetch(url, {
    ...params,
    muteHttpExceptions: options.verbose,
  });
  const data = JSON.parse(response.getContentText());

  serviceLogger(options, { data });

  return { ...data };
}
// --------------------------------------------------------------------------------------------------
function Post(url, payload, options = { verbose: false }) {
  const body = request("post", options);
  const params = { ...body, payload: JSON.stringify(payload) };

  serviceLogger(options, { url, payload });

  const response = UrlFetchApp.fetch(url, {
    ...params,
    muteHttpExceptions: options.verbose,
  });
  const data = JSON.parse(response.getContentText());

  serviceLogger(options, { data });

  return { ...data };
}
// --------------------------------------------------------------------------------------------------
function Put(url, payload, options = { verbose: false }) {
  const body = request("put", options);
  const params = { ...body, payload: JSON.stringify(payload) };

  serviceLogger(options, { url, payload });

  const response = UrlFetchApp.fetch(url, {
    ...params,
    muteHttpExceptions: options.verbose,
  });
  const data = JSON.parse(response.getContentText());

  serviceLogger(options, { data });

  return { ...data };
}
// --------------------------------------------------------------------------------------------------
function Remove(url, options = { verbose: false }) {
  const params = request("delete", options);

  const response = UrlFetchApp.fetch(url, params);
  const data = JSON.parse(response.getContentText());

  serviceLogger(options, { data });

  return { ...data };
}
// --------------------------------------------------------------------------------------------------
