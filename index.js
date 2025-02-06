import {exec} from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

exec('git diff', (err, stdout, stderr) => {
  if (err) {
    console.error('err', err);
  }

  let message = stdout

})
