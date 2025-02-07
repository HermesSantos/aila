import {exec} from 'child_process';
import {GeminiService} from './service/gemini.service.js'
import dotenv from 'dotenv';

dotenv.config()

let message

exec('git diff', (err, stdout, stderr) => {
  if (err) {
    console.error('err', err);
    return
  }
  message = stdout
  const gemini_service = new GeminiService(message)
  gemini_service.getCommitMessage()
})

