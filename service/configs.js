import inquirer from "inquirer";

export class Config {
  changeCommitLanguage () {
    inquirer.prompt([
      {
        type: 'list',
        name: 'language',
        message: 'Escolha o idioma das mensagens de commit',
        choices: ['English', 'Português']
      }
    ]).then(answer => {
        if(answer.language === 'English') {
          const __filename = fileURLToPath(import.meta.url);
          const __dirname = path.dirname(__filename);
          const filePath = path.resolve(__dirname, '../.env');
          fs.appendFileSync(filePath, `APP_LANGUAGE=${answer.language}`, 'utf8');
          console.log('Commit language changed successfully.')
        }
        console.log('Idioma alterado com sucesso.')
      })
  }
  changeApplicationLanguage () {}
  changeApiKey () {}
}
