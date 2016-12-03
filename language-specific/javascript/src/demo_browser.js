import { Red } from './Red.js';
import { Blue } from './Blue.js';

const colors = [
    new Red(),
    new Blue(),
];

const text = 'Hello world!';

const output = text.split(' ')
        .map((w, i) => colors[i % colors.length].getHTML(w))
        .join(' ');

document.body.innerHTML = output;
