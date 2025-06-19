"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const generate_1 = require("./generate");
async function main() {
    const answers = await inquirer_1.default.prompt([
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
    await (0, generate_1.generateReadme)(answers);
    console.log('README generated !');
}
main().catch(console.error);
