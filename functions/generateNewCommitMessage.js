import { GeminiService } from "../service/gemini.service.js"
import {exec} from 'child_process'
import {logger} from '../utils/logger.js'
import {verifyLogs} from '../functions/verifyLogs.js'

let finalMessage

export const generateNewCommitMessage = () => {
  exec('git diff', (err, stdout, stderr) => {
    if (err) {
      logger(err.code)
      return
    }
    verifyLogs(stdout)
    const gemini_service = new GeminiService(stdout)
    finalMessage = gemini_service.getCommitMessage()
  })
}
