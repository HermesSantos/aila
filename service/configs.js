import inquirer from "inquirer";
import { pathFileFinder } from "../utils/pathFileFinder.js";
import fs from "fs";

export class Config {
  changeCommitLanguage () {
    inquirer.prompt([
      {
        type: 'list',
        name: 'language',
        message: 'Escolha o idioma das mensagens de commit',
        choices: ['English', 'Português']
      }
    ]).then(answer => {
        const path = pathFileFinder('../.env')
        fs.readFile(path, 'utf8', (err, data) => {
          if(err) {
            console.log(err)
            return
          }
          const newData = data
            .includes('APP_LANGUAGE') ?
              data.replace(/APP_LANGUAGE=.*/g, `APP_LANGUAGE=${answer.language}\n`) :
              data.concat(`APP_LANGUAGE=${answer.language}\n`)
          fs.writeFile(path, newData, (err) => console.log(err))
        });
      console.log('Idioma alterado com sucesso.')
    })
  }
  changeApplicationLanguage () {}
  changeApiKey () {}
}
