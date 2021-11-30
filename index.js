const fs = require('fs')
const objChat = require('./result.json')

async function main() {
  const onlyText = objChat.messages
    .map(message => message.text)
    .filter(text => text && typeof text === 'string')

  fs.writeFileSync('result.txt', onlyText.join('\n\n'))
  // const data = await fs.readFileSync('./index.js', 'utf8')
  console.log(onlyText)
}

main()
