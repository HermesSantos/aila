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
            .includes('COMMIT_LANGUAGE') ?
              data.replace(/COMMIT_LANGUAGE=.*/g, `COMMIT_LANGUAGE=${answer.language}\n`) :
              data.concat(`COMMIT_LANGUAGE=${answer.language}\n`)
          fs.writeFile(path, newData, (err) => console.log(err))
        });
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
        console.log('ainda nao implementado')
      })
  }
  changeApiKey () {
    inquirer.prompt([
      {
        name: 'apiKey',
        message: 'Nova chave de API do Gemini: ',
      },
    ]).then(answer => {
        const path = pathFileFinder('../.env')
        fs.readFile(path, 'utf8', (err, data) =>  {
          if(err) {
            console.log(err)
            return
          }
          const newData = data
            .includes('API_KEY') ?
              data.replace(/API_KEY=.*/g, `API_KEY=${answer.apiKey}\n`) :
              data.concat(`API_KEY=${answer.apiKey}\n`)
          fs.writeFile(path, newData, (err) => console.log(err))
        })
      })
  }
}
