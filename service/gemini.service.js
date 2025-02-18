import { instance } from "../provider/axios.js";
import {question} from '../service/inquirer.js'
import process from 'process'

export class GeminiService {
  constructor (message) {
    this.message = message
  }
  getCommitMessage() {
    if(process.env.API_KEY) {
      instance.post(`?key=${process.env.API_KEY}`,
        {
          "contents": [{
            "parts":[{"text": `Me retorne em ${process.env.COMMIT_LANGUAGE}, sem caracteres especiais como aspas ou quebra de linha, uma mensagem de commit curta que mostre o que foi alterado nesse commit: ${this.message}`}]
          }]
        },
      ).then((response) => {
          const commitMessage = response.data.candidates[0].content.parts[0].text
          if (response) console.log('Mensagem de commit: \n', commitMessage, '\n')
          question(commitMessage)
        }).catch((error) => {
          console.log(error.response)
        });
    } else {
      console.error('Erro ao adiquirir chave de API')
    }
  }
}
