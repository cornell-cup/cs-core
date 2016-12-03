import { Red } from './Red.js';
import { Blue } from './Blue.js';

const colors = [
    new Red(),
    new Blue(),
];

const text = 'Hello world!'.split(' ');

for (let i = 0; i < text.length; i++) {
    colors[i % colors.length].print(text[i]);
}
