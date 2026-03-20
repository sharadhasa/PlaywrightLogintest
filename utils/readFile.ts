import fs from 'fs';

export function readFileData(filePath: string) {
  return fs.readFileSync(filePath, 'utf-8');
}




