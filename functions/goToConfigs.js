import inquirer from "inquirer";
import {Config} from '../service/configs.js'
import {question} from '../service/inquirer.js'

export const goToConfigs = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'configs',
      message: 'Configurações',
      choices: ['Mudar chave de API', 'Alterar idioma das mensagens de commit', 'Alterar idioma da aplicação', 'Voltar', 'Sair']
    }
  ]).then(answer => {
      if(answer.configs === 'Mudar chave de API') {
        new Config().changeApiKey()
      } else if (answer.configs === 'Alterar idioma das mensagens de commit') {
        new Config().changeCommitLanguage()
      } else if (answer.configs === 'Alterar idioma da aplicação') {
        new Config().changeApplicationLanguage()
      } else if (answer.configs === 'Voltar') {
        question()
      }
    })
}
