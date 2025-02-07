import {exec} from 'child_process'

export const useCurrentCommitMessage = (commitMessage) => {
  exec(`git add . && git commit -m "${commitMessage}"`, (err, stdout, stderr) => {
    if (err) {
      console.error('err', err);
      return
    }
    console.log('Mensagem de commit usada com sucesso!')
  })
}
