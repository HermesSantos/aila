import { GeminiService } from "../service/gemini.service.js"
import {exec} from 'child_process'

let finalMessage

export const generateNewCommitMessage = () => {
  exec('git diff', (err, stdout, stderr) => {
    if (err) {
      if(err.code === 129) {
        console.error('Not a git repository. Error code: ', err.code);
        return
      }
      return
    }
    const gemini_service = new GeminiService(stdout)
    finalMessage = gemini_service.getCommitMessage()
  })
}
