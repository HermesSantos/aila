import { GeminiService } from "../service/gemini.service.js"
import {exec} from 'child_process'

let finalMessage

export const generateNewCommitMessage = () => {
  exec('git diff', (err, stdout, stderr) => {
    if (err) {
      console.error('err', err);
      return
    }
    const gemini_service = new GeminiService(stdout)
    finalMessage = gemini_service.getCommitMessage()
  })
}
