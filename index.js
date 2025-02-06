import { instance } from "./provider/axios.js";
import {exec} from 'child_process';
import dotenv from 'dotenv';

dotenv.config();
exec('git diff', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
})
// instance.post(`?key=${process.env.API_KEY}`,
//   {
//     "contents": [{
//       "parts":[{"text": "oi"}]
//     }]
//   },
// ).then((response) => {
//     console.log(response.data.candidates[0].content.parts[0].text)
//   }).catch((error) => {
//     console.log(error.response.data.error.message)
//   });
