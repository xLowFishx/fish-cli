const { log } = require('./utils/logger.js');
const { healthCheckCommand } = require('./commands/health-check.command.js');

/**
 * No argv runs a basic health check. 
 */
function run(argv) {
  const commandToRun = argv[2] || 'fish-health-check';
  callCommand(commandToRun);
}

function callCommand(commandToRun) {
  switch (commandToRun) {
    case 'fish-health-check':
      healthCheckCommand();
      break;
      
      default:
        log('Missing implementation for command:', commandToRun);
      break;
  }
}

module.exports = { run };
