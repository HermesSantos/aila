import inquirer from "inquirer";
import {generateNewCommitMessage} from '../functions/generateNewCommitMessage.js'
import {useCurrentCommitMessage} from '../functions/useCurrentCommitMessage.js'
import {goToConfigs} from '../functions/goToConfigs.js'
import process from 'process'
import {lang} from '../languages/lang.js'

export const question = (commitMessage) => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'isCommitMessageAwesome',
        message: `${lang[process.env.APP_LANGUAGE].A01}`,
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
