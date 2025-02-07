import { GeminiService } from "../service/gemini.service.js"
import {exec} from 'child_process'

let finalMessage

export const generateNewCommitMessage = () => {
  exec('git diff', (err, stdout, stderr) => {
    console.log(stdout === '')
    if (err) {
      if(err.code === 129) {
        console.error('Not a git repository. Error code: ', err.code);
        return
      }
      if(err.code === 127) {
        console.error('Git is not installed. Error code: ', err.code);
        return
      }
      if(stdout === '') {
        console.error('No differences to be shown', err.code);
      }
      return
    }
    const gemini_service = new GeminiService(stdout)
    finalMessage = gemini_service.getCommitMessage()
  })
}
