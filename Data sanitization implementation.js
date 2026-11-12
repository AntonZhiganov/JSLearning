function sanitizeLog (entry, disallowedCharacters) {
  let entryArr = entry.split('');

  for (let i = 0; i < disallowedCharacters.length; i++) {
    for (let j = 0; j < entryArr.length; j++) {
      if (disallowedCharacters[i] === entryArr[j]) {
        entryArr[j] = "#";
      }
      else {
        continue;
      }
    }
  }
  entry = entryArr.join('')
  return entry;
}

function cleanLogs (logs, disallowedCharacters) {
  let infoCounter = 0;
  let cleanRecords = 0;

 for (let i = 0; i < logs.length; i++) {
    if (logs[i].includes("$")) {
      return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
    }

    if (logs[i][0] === "/") {
      infoCounter += 1;
    } else {

      sanitizeLog(logs[i], disallowedCharacters);
      cleanRecords += 1;
    }
  }

  return `Total Entry Count: ${logs.length}. Sanitized Entry Count: ${cleanRecords}. Informational Entry Count: ${infoCounter}. Finished sanitizing logs.`;
}
