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
        name: "basics",
        display: "JavaScript",
        colour: yellow,
      },
      {
        name: "basics-ts",
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
