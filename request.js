// After 500ms, if the request doesn't complete, it gets aborted
const REQUEST_TIMEOUT = 500;

// Https request, so we need to encrypt data:
function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
  REQUEST_TIMEOUT,
  // send: send,
  send,
};
