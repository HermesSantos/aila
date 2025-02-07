import inquirer from "inquirer";
import {generateNewCommitMessage} from '../functions/generateNewCommitMessage.js'
import {useCurrentCommitMessage} from '../functions/useCurrentCommitMessage.js'

export const question = (commitMessage) => {
  console.log('Mensagem de commit: ', commitMessage)
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'isCommitMessageAwesome',
        message: 'Gostaria de gerar outra mensagem de commit ou usar essa?',
        choices: ['Gerar outra', 'Usar essa']
      }
    ])
    .then((answers) => {
      if(answers.isCommitMessageAwesome === 'Gerar outra') {
        generateNewCommitMessage()
      } else {
        useCurrentCommitMessage(commitMessage)
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
