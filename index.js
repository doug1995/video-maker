const readline = require('readline-sync')

function start(){
    const content = {}
    content.searchTerm = askAndReturnSeachTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSeachTerm() {
        return readline.question('Defina um termo de busca Wikipedia: ')
    }
    function askAndReturnPrefix(){
      const prefixes =[ 'Quem é: ', 'O que é:', 'A história']
      const selectedPrefixIndex = readline.keyInSelect(prefixes,'Escolha uma opção: ')
      const selectedPrefixText = prefixes[selectedPrefixIndex]
      console.log(selectedPrefixText)
    }

console.log(content)
}

start()