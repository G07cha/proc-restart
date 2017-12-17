# proc-restart

Restart process without having process manager constantly running

### Quickstart

Install package:

```
npm install proc-restart
```

Require inside of your script and call it when you want to restart it:

```javascript
const restart = require('proc-restart')

process.on('uncaughtException', (err) => {
    console.error('Error occured:', err)
    restart()
})
```

## License

MIT © [Konstantin Azizov](http://g07cha.github.io)

