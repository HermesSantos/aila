export const verifyLogs = (diff) => {
  if (diff.includes('console.log')) {

    showMessage()

    const lines = diff.split('\n');
    let currentFile = '';
    let currentLineNumber = 0;
    let lineOffset = 0;

    lines.forEach((line, i) => {
      const fileMatch = line.match(/^diff --git a\/(.+?) b\/(.+)$/);
      if (fileMatch) {
        currentFile = fileMatch[2];
        return;
      }

      const hunkMatch = line.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/);
      if (hunkMatch) {
        currentLineNumber = parseInt(hunkMatch[1], 10);
        lineOffset = 0;
        return;
      }

      if (line.startsWith('+') && !line.startsWith('+++')) {
        if (line.includes('console.log')) {
          const realLine = currentLineNumber + lineOffset;
          console.log(
            `\x1b[33mArquivo:\x1b[0m ${currentFile} \x1b[36mLinha no arquivo:\x1b[0m ${realLine}: ${line.trim()}`
          );
        }
        lineOffset++;
      } else if (!line.startsWith('-')) {
        lineOffset++;
      }
    });

    return false;
  }
  return true;
}

function showMessage () {
  const msg = 'Atenção, console.log detectado no commit.';
  const border = '═'.repeat(msg.length + 2);

  console.log(`\x1b[31m╔${border}╗`);
  console.log(`║ ${msg} ║`);
  console.log(`╚${border}╝\x1b[0m`);
}
