const { spawn } = require('child_process')
const { join } = require('path')

function restart() {
  const { env, argv } = process
  env._argv = JSON.stringify(argv)

  spawn(argv[0], [join(__dirname, 'restarter.js')], {
    detached: true,
    stdio: 'inherit',
    env
  });

  process.exit()
}

module.exports = restart

