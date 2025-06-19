import fs from 'fs/promises';
import path from 'path';

interface Answers {
  projectName: string;
  description: string;
  feature1: string;
  feature2: string;
  nodeVersion: string;
  repoUrl: string;
  version: string;
  date: string;
  about: string;
}

export async function generateReadme(answers: Answers) {
  const templatePath = path.join(__dirname, 'templates', 'default.md');
  let template = await fs.readFile(templatePath, 'utf-8');

  template = template
    .replace('{{projectName}}', answers.projectName)
    .replace('{{description}}', answers.description)
    .replace('{{feature1}}', answers.feature1)
    .replace('{{feature2}}', answers.feature2)
    .replace('{{nodeVersion}}', answers.nodeVersion)
    .replace('{{repoUrl}}', answers.repoUrl)
    .replace('{{version}}', answers.version)
    .replace('{{date}}', answers.date)
    .replace('{{about}}', answers.about);

  await fs.writeFile(path.join(process.cwd(), 'README.md'), template);
}
