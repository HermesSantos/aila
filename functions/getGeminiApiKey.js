import inquirer from "inquirer";
import { fileURLToPath } from 'url';
import { generateNewCommitMessage} from './generateNewCommitMessage.js'
import path from 'path';

import fs from 'fs';

export const getGeminiApiKey = () => {
  inquirer
    .prompt([
      {
        type: 'password',
        name: 'secret',
        message: 'É necessário informar uma chave de API Gemini: ',
      },
    ])
    .then(answers => {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const filePath = path.resolve(__dirname, '../.env');
      fs.writeFileSync(filePath, `API_KEY=${answers.secret}`);
      console.info('Chave salva com sucesso.');
      generateNewCommitMessage()
    });
}
