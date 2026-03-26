const { runHealthChecks } = require('../services/health-check.service.js');
const { log, logSuccess, logError, logSection } = require('../utils/logger.js');

function healthCheckCommand() {
  logSection('fish-cli — Health Check');

  let allPassed = true;
  const results = runHealthChecks();

  for (const { label, ok, detail } of results) {
    if (ok) {
      logSuccess(`${label}: ${detail}`);
    } else {
      logError(`${label}: ${detail}`);
      allPassed = false;
    }
  }

  log('');
  if (allPassed) {
    logSuccess('All checks passed. Ready to run commands.');
  } else {
    logError('One or more checks failed. Fix the issues above before running commands.');
    process.exit(1);
  }
}

module.exports = { healthCheckCommand };