const fs = require('fs');
const path = require('path');
const os = require('os');

const MIN_NODE_MAJOR = 18;

function checkNodeVersion() {
  const major = parseInt(process.versions.node.split('.')[0], 10);
  const ok = major >= MIN_NODE_MAJOR;
  return {
    label: 'Node version',
    ok,
    detail: ok
      ? `v${process.versions.node} (>= ${MIN_NODE_MAJOR} required)`
      : `v${process.versions.node} — upgrade to Node ${MIN_NODE_MAJOR}+ required`,
  };
}

function checkCwdReadable() {
  const cwd = process.cwd();
  try {
    fs.accessSync(cwd, fs.constants.R_OK | fs.constants.W_OK);
    return { label: 'Working directory readable', ok: true, detail: cwd };
  } catch {
    return { label: 'Working directory readable', ok: false, detail: `Cannot read ${cwd}` };
  }
}

function checkCwdWritable() {
  const cwd = process.cwd();
  const testFile = path.join(cwd, '.fish-cli-write-test');
  try {
    fs.writeFileSync(testFile, '');
    fs.unlinkSync(testFile);
    return { label: 'Working directory writable', ok: true, detail: cwd };
  } catch {
    return { label: 'Working directory writable', ok: false, detail: `Cannot write to ${cwd}` };
  }
}

function checkHomeAccessible() {
  const home = os.homedir();
  try {
    fs.accessSync(home, fs.constants.R_OK | fs.constants.W_OK);
    return { label: 'Home directory accessible', ok: true, detail: home };
  } catch {
    return { label: 'Home directory accessible', ok: false, detail: `Cannot access ${home}` };
  }
}

function runHealthChecks() {
  return [
    checkNodeVersion(),
    checkCwdReadable(),
    checkCwdWritable(),
    checkHomeAccessible(),
  ];
}

module.exports = { runHealthChecks };
