const { spawn } = require('child_process')

let argv;

try {
  argv = JSON.parse(process.env._argv)
} catch(err) {
  throw new Error('Failed to parse argv')
}

delete process.env._argv

spawn(argv[0], argv.slice(1), {
  detached: true,
  stdio: 'inherit',
  env: process.env
})

process.exit()
