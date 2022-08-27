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
    name: "vanilla",
    colour: yellow,
    variants: [
      {
        name: "vanilla",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "vanilla-ts",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "vitest",
    colour: green,
    variants: [
      {
        name: "js-vitest",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-vitest",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "bootstrap",
    colour: magenta,
    variants: [
      {
        name: "js-bootstrap",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-bootstrap",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "jest",
    colour: lightRed,
    variants: [
      {
        name: "js-jest",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-jest",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "minimal",
    colour: lightCyan,
    variants: [
      {
        name: "js-minimal",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-minimal",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "windicss",
    colour: blue,
    variants: [
      {
        name: "js-windicss",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-windicss",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "router",
    colour: white,
    variants: [
      {
        name: "js-router",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-router",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "sass",
    colour: lightMagenta,
    variants: [
      {
        name: "js-sass",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-sass",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "tailwindcss",
    colour: blue,
    variants: [
      {
        name: "js-tailwindcss",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-tailwindcss",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "unocss",
    colour: gray,
    variants: [
      {
        name: "js-unocss",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-unocss",
        display: "TypeScript",
        colour: blue,
      },
    ],
  },
  {
    name: "uvu",
    colour: magenta,
    variants: [
      {
        name: "js-uvu",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "ts-uvu",
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
