import { Color } from './Color.js';

export class Red extends Color {
    print(text) {
        const colors = require('colors/safe');
        console.log(colors.red(text));
    }

    getHTML(text) {
        return `<span style=\"color: red;\">${text}</span>\n`;
    }
}
