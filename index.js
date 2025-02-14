#!/usr/bin/env node
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import {generateNewCommitMessage} from './functions/generateNewCommitMessage.js'
import {getGeminiApiKey} from './functions/getGeminiApiKey.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });

if(!process.env.API_KEY_TEST) {
  getGeminiApiKey()
} else {
  generateNewCommitMessage()
}

