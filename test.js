const { tmpdir } = require('os')
const { writeFileSync } = require('fs')
const { exec } = require('child_process')
const { join } = require('path')

const scriptPath = join(tmpdir(), 'test-subject.js')
const script = `
const restart = require('${join(__dirname, 'index.js')}')

console.log(process.env.TEST_VAR)

if(process.env.RESTARTED) {
  process.exit()
} else {
  process.env.RESTARTED = true
  restart()
}
`

writeFileSync(scriptPath, script)

process.env.TEST_VAR = 'test'

exec(`${process.argv[0]} ${scriptPath}`, function(error, stdout) {
  if(error) throw error;
  if(stdout !== process.env.TEST_VAR + '\n' + process.env.TEST_VAR + '\n') {
    throw new Error('Enviroment variable is not processed')
  }

  console.log('ok')
})

