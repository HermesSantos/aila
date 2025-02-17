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
            "parts":[{"text": `Me retorne em ${process.env.APP_LANGUAGE}, sem caracteres especiais como aspas ou quebra de linha, uma mensagem de commit curta que mostre o que foi alterado nesse commit: ${this.message}`}]
          }]
        },
      ).then((response) => {
          question(response.data.candidates[0].content.parts[0].text)
        }).catch((error) => {
          error.response
        });
    } else {
      console.error('Erro ao adiquirir chave de API')
    }
  }
}
