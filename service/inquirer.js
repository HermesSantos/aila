import inquirer from "inquirer";
import {generateNewCommitMessage} from '../functions/generateNewCommitMessage.js'
import {useCurrentCommitMessage} from '../functions/useCurrentCommitMessage.js'
import {goToConfigs} from '../functions/goToConfigs.js'

export const question = (commitMessage) => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'isCommitMessageAwesome',
        message: 'Gostaria de gerar outra mensagem de commit ou usar essa?',
        choices: ['Usar essa', 'Gerar outra', 'Configurações', 'Sair']
      }
    ])
    .then((answers) => {
      if(answers.isCommitMessageAwesome === 'Usar essa') {
        useCurrentCommitMessage(commitMessage)
      } else if (answers.isCommitMessageAwesome === 'Gerar outra') {
        generateNewCommitMessage()
      } else if (answers.isCommitMessageAwesome === 'Configurações') {
        goToConfigs(commitMessage)
      } else {
        return
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment")
      } else {
        console.log("Something else went wrong", error)
      }
    });
}
