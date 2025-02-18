import inquirer from "inquirer";
import {generateNewCommitMessage} from '../functions/generateNewCommitMessage.js'
import {useCurrentCommitMessage} from '../functions/useCurrentCommitMessage.js'
import {goToConfigs} from '../functions/goToConfigs.js'
import { currentLang } from "../utils/currentLang.js";

export const question = (commitMessage) => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'isCommitMessageAwesome',
        message: `${currentLang().A01}`,
        choices: [`${currentLang().A02}`, `${currentLang().A03}`, `${currentLang().A04}`, `${currentLang().A05}`]
      }
    ])
    .then((answers) => {
      if(answers.isCommitMessageAwesome === `${currentLang().A02}`) {
        useCurrentCommitMessage(commitMessage)
      } else if (answers.isCommitMessageAwesome === `${currentLang().A03}`) {
        generateNewCommitMessage()
      } else if (answers.isCommitMessageAwesome === `${currentLang().A04}`) {
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
