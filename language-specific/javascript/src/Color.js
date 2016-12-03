export class Color {
    print(text) {
        const colors = require('colors/safe');
        console.log(colors.black(text));
    }

    getHTML(text) {
        return `<p>${text}</p>`;
    }
}
