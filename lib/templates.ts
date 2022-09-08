import {
  green,
  magenta,
  lightRed,
  lightCyan,
  white,
  lightMagenta,
  gray,
} from "kolorist";

const { yellow, blue } = require("kolorist");

export const templates = [
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
    colour: lightCyan,
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
    colour: gray,
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
    colour: lightMagenta,
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
    colour: green,
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

export const TEMPLATES = templates
  .map((f): string[] => {
    return (f.variants && f.variants.map((v) => v.name)) || [f.name];
  })
  .reduce((a, b): string[] => {
    return a.concat(b);
  }, []);
