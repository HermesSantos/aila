#!/usr/bin/env node

import dotenv from 'dotenv';
import {generateNewCommitMessage} from './functions/generateNewCommitMessage.js'
console.log('oi')

dotenv.config()

generateNewCommitMessage()

