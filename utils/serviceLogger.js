// --------------------------------------------------------------------------------------------------
function serviceLogger(options = { verbose: false }, { url = null, payload = null, data = null }) {
  if (options.verbose) {
    if (url) console.log(url);
    if (payload) console.log(JSON.stringify(payload, null, LOG_LEVEL));
    if (data) console.log(JSON.stringify(data, null, LOG_LEVEL));
  }
}
// --------------------------------------------------------------------------------------------------
