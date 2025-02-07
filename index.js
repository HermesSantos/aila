#!/usr/bin/env node

import dotenv from 'dotenv';
import {generateNewCommitMessage} from './functions/generateNewCommitMessage.js'

dotenv.config()

generateNewCommitMessage()

