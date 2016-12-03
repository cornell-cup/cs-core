import { Color } from './Color.js';

export class Blue extends Color {
    print(text) {
        const colors = require('colors/safe');
        console.log(colors.blue(text));
    }

    getHTML(text) {
        return `<span style=\"color: blue;\">${text}</span>\n`;
    }
}
