import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../messages.json');

// Append Message to JSON File (Async Approach)
const appendMessageToFile = async (message) => {
  try {
    let messages = [];

    // Check if file exists and read its contents
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      messages = JSON.parse(fileData);
    } catch (error) {
      console.log(error)
      if (error.code !== 'ENOENT') {
        console.error('Error reading file:', error.message);
        return;
      }
      // File does not exist, create an empty array
      await fs.writeFile(filePath, '[]', 'utf-8');
    }

    // Append the new message
    messages.push(message);

    // Write updated messages to file
    await fs.writeFile(filePath, JSON.stringify(messages, null, 2), 'utf-8');
    console.log('Message appended to messages.json');
  } catch (error) {
    console.log(error)
    console.error('Error writing message to file:', error.message);
  }
};

export default appendMessageToFile;
