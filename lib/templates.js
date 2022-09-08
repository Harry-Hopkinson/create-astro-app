"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPLATES = exports.templates = void 0;
const kolorist_1 = require("kolorist");
const { yellow, blue } = require("kolorist");
exports.templates = [
    {
        name: "basics",
        colour: yellow,
        variants: [
            {
                name: "js-basics",
                display: "JavaScript",
                colour: yellow,
            },
            {
                name: "ts-basics",
                display: "TypeScript",
                colour: blue,
            },
        ],
    },
    {
        name: "react",
        colour: kolorist_1.lightCyan,
        variants: [
            {
                name: "js-react",
                display: "JavaScript",
                colour: yellow,
            },
            {
                name: "ts-react",
                display: "TypeScript",
                colour: blue,
            },
        ],
    },
    {
        name: "blog",
        colour: kolorist_1.gray,
        variants: [
            {
                name: "js-blog",
                display: "JavaScript",
                colour: yellow,
            },
            {
                name: "ts-blog",
                display: "TypeScript",
                colour: blue,
            },
        ],
    },
    {
        name: "docs",
        colour: kolorist_1.lightMagenta,
        variants: [
            {
                name: "js-docs",
                display: "JavaScript",
                colour: yellow,
            },
            {
                name: "ts-docs",
                display: "TypeScript",
                colour: blue,
            },
        ],
    },
    {
        name: "vue",
        colour: kolorist_1.green,
        variants: [
            {
                name: "js-vue",
                display: "JavaScript",
                colour: yellow,
            },
            {
                name: "ts-vue",
                display: "TypeScript",
                colour: blue,
            },
        ],
    },
];
exports.TEMPLATES = exports.templates
    .map((f) => {
    return (f.variants && f.variants.map((v) => v.name)) || [f.name];
})
    .reduce((a, b) => {
    return a.concat(b);
}, []);
