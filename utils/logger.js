export const logger = (code) => {
  let codes =  [
    {
      '129': notGitRepository
    },
    {
      '127': gitNotInstalled
    },
    {
      'empty': emptyDiff
    }
  ]
  notGitRepository = () => {
    console.error('Not a git repository. Error code: ', err.code);
    return
  }
  gitNotInstalled = () => {
    console.error('Git is not installed. Error code: ', err.code);
    return
  }
  emptyDiff = () => {
    console.error('No differences to be shown', err.code);
    return
  }
  codes[code]()
}
