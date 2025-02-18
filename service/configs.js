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
        this.updateEnv('API_KEY', answer.language)
        console.log('Idioma alterado com sucesso.')
    })
  }
  changeApplicationLanguage () {
    inquirer.prompt([
      {
        type: 'list',
        name: 'language',
        message: 'Escolha o idioma da aplicação',
        choices: ['English', 'Português']
      }
    ]).then(answer => {
        this.updateEnv('API_KEY', answer.language)
      })
  }
  changeApiKey () {
    inquirer.prompt([
      {
        name: 'apiKey',
        message: 'Nova chave de API do Gemini: ',
      },
    ]).then(answer => {
        this.updateEnv('API_KEY', answer.apiKey)
      })
  }
  updateEnv (envKey, answer) {
    const path = pathFileFinder('../.env')
    const regex = new RegExp(`${envKey}=.*`, 'g'); 

    fs.readFile(path, 'utf8', (err, data) =>  {
      if(err) {
        console.log(err)
        return
      }
      const newData = data
        .includes(envKey) ?
        data.replace(regex, `${envKey}=${answer}\n`) :
        data.concat(`${envKey}=${answer}\n`)
      fs.writeFile(path, newData, (err) => console.log(err))
    })
  }
}
