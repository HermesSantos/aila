import { instance } from "../provider/axios.js";

export class GeminiService {
  constructor (message) {
    this.message = message
  }
  getCommitMessage() {
    instance.post(`?key=${process.env.API_KEY}`,
      {
        "contents": [{
          "parts":[{"text": "me retorne uma mensagem de commit curta que mostre o que foi alterado: " + this.message}]
        }]
      },
    ).then((response) => {
        console.log(response.data.candidates[0].content.parts[0].text)
      }).catch((error) => {
        console.log(error.response.data.error.message)
      });
  }
}
