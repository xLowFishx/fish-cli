function log(message) {
  console.log(message);
}

function logSuccess(message) {
  console.log(`\x1b[32m✔\x1b[0m  ${message}`);
}

function logError(message) {
  console.log(`\x1b[31m✘\x1b[0m  ${message}`);
}

function logSection(title) {
  console.log(`\n\x1b[1m${title}\x1b[0m`);
}

module.exports = { log, logSuccess, logError, logSection };