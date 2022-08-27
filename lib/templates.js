"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPLATES = exports.templates = void 0;
const kolorist_1 = require("kolorist");
const { yellow, blue } = require("kolorist");
exports.templates = [
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
    colour: kolorist_1.green,
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
    colour: kolorist_1.magenta,
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
    colour: kolorist_1.lightRed,
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
    colour: kolorist_1.lightCyan,
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
    colour: kolorist_1.white,
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
    colour: kolorist_1.lightMagenta,
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
    colour: kolorist_1.gray,
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
    colour: kolorist_1.magenta,
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
exports.TEMPLATES = exports.templates
  .map((f) => {
    return (f.variants && f.variants.map((v) => v.name)) || [f.name];
  })
  .reduce((a, b) => {
    return a.concat(b);
  }, []);
