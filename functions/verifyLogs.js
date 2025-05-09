export const verifyLogs = (diff) => {
  console.log(diff)
  if (diff.includes('console.log')) {
    console.log('################################################################')
    console.log('há logs')
    console.log('################################################################')
  }
}
