export const verifyLogs = (diff) => {
  if (diff.includes('console.log')) {
    console.log('\x1b[31m%s\x1b[0m', 'Atenção, console.log detectado no commit. Verifique o commit.')
    let lines = diff.split('\n')
    lines.forEach((line, i) => {
      if (line.includes('console.log')) {
        console.log(`Encontrado na linha ${i + 1}: ${line.trim()}`);
      }
    });
    return false
  }
  return true
}
