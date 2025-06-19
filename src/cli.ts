import inquirer from 'inquirer';
import { generateReadme } from './generate';

async function main() {
  const answers = await inquirer.prompt([
        { type: 'input', name: 'projectName', message: 'Project name:' },
        { type: 'input', name: 'description', message: 'Short description:' },
        { type: 'input', name: 'feature1', message: 'Feature 1:' },
        { type: 'input', name: 'feature2', message: 'Feature 2:' },
        { type: 'input', name: 'nodeVersion', message: 'Node.js version:' },
        { type: 'input', name: 'repoUrl', message: 'Repository URL:' },
        { type: 'input', name: 'version', message: 'Version:' },
        { type: 'input', name: 'date', message: 'Release date:' },
        { type: 'input', name: 'about', message: 'About the project:' },
  ]);
  await generateReadme(answers);
  console.log('README generated !');}

main().catch(console.error);
