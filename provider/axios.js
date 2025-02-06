import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-001:generateContent',
  headers: {'Content-Type': 'application/json'}
});

