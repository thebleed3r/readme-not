"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReadme = generateReadme;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
async function generateReadme(answers) {
    const templatePath = path_1.default.join(__dirname, 'templates', 'default.md');
    let template = await promises_1.default.readFile(templatePath, 'utf-8');
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
    await promises_1.default.writeFile(path_1.default.join(process.cwd(), 'README.md'), template);
}
