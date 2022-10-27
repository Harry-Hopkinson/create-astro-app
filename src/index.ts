const fs = require("fs");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2), { string: ["_"] });
const prompts = require("prompts");
const { red, reset } = require("kolorist");
import { templates, TEMPLATES } from "../lib/templates";
import { isValidPackageName, toValidPackageName } from "../lib/packageName";
import { pkgFromUserAgent } from "../lib/pkg";

const cwd = process.cwd();
const renameFiles = {
  _gitignore: ".gitignore",
};

async function createApp() {
  let targetDir = argv._[0];
  let template = argv.template || argv.t;

  const defaultProjectName = !targetDir ? "astro-application" : targetDir;

  let result = {};

  try {
    result = await prompts(
      [
        {
          type: targetDir ? null : "text",
          name: "projectName",
          message: reset("Project name:"),
          initial: defaultProjectName,
          onState: (state: { value: string }) =>
            (targetDir = state.value.trim() || defaultProjectName),
        },
        {
          type: () =>
            !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : "confirm",
          name: "overwrite",
          message: () =>
            (targetDir === "."
              ? "Current directory"
              : `Target directory "${targetDir}"`) +
            ` is not empty. Remove existing files and continue?`,
        },
        {
          // @ts-ignore
          type: (_: any, { overwrite } = {}) => {
            if (overwrite === false) {
              throw new Error(red("✖") + " Operation cancelled");
            }
            return null;
          },
          name: "overwriteChecker",
        },
        {
          type: () => (isValidPackageName(targetDir) ? null : "text"),
          name: "packageName",
          message: reset("Package name:"),
          initial: () => toValidPackageName(targetDir),
          validate: (dir: any) =>
            isValidPackageName(dir) || "Invalid package.json name",
        },
        {
          type: template && TEMPLATES.includes(template) ? null : "select",
          name: "framework",
          message:
            typeof template === "string" && !TEMPLATES.includes(template)
              ? reset(
                  `"${template}" isn't a valid template. Please choose from below: `,
                )
              : reset("Select a framework:"),
          initial: 0,
          choices: templates.map((template) => {
            const frameworkColor = template.colour;
            return {
              title: frameworkColor(template.name),
              value: template,
            };
          }),
        },
        {
          type: (framework: { variants: any }) =>
            framework && framework.variants ? "select" : null,
          name: "variant",
          message: reset("Select a variant:"),
          choices: (framework: { variants: any[] }) =>
            framework.variants.map((variant) => {
              const variantColor = variant.colour;
              return {
                title: variantColor(variant.name),
                value: variant.name,
              };
            }),
        },
      ],
      {
        onCancel: () => {
          throw new Error(red("✖") + " Operation cancelled");
        },
      },
    );
  } catch (cancelled: any) {
    console.log(cancelled.message);
    return;
  }
  // @ts-ignore
  const { framework, overwrite, packageName, variant } = result;

  const root = path.join(cwd, targetDir);

  if (overwrite) {
    emptyDir(root);
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root);
  }

  template = variant || framework || template;

  console.log(`\nScaffolding project in ${root}...`);

  const templateDir = path.join(__dirname, `template-${template}`);

  const write = (file: string, content: string | undefined) => {
    // @ts-ignore
    const targetPath = renameFiles[file]
      ? // @ts-ignore
        path.join(root, renameFiles[file])
      : path.join(root, file);
    if (content) {
      fs.writeFileSync(targetPath, content);
    } else {
      copy(path.join(templateDir, file), targetPath);
    }
  };

  const files = fs.readdirSync(templateDir);
  for (const file of files.filter((f: string) => f !== "package.json")) {
    write(file, undefined);
  }

  const pkg = require(path.join(templateDir, `package.json`));

  pkg.name = packageName || targetDir;

  write("package.json", JSON.stringify(pkg, null, 2));

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
  const pkgManager = pkgInfo ? pkgInfo.name : "npm";

  console.log(`\nDone. Now run:\n`);
  if (root !== cwd) {
    console.log(`  cd ${path.relative(cwd, root)}`);
  }
  switch (pkgManager) {
    case "yarn":
      console.log("  yarn");
      console.log("  yarn start");
      break;
    default:
      console.log(`  ${pkgManager} install`);
      console.log(`  ${pkgManager} run start`);
      break;
  }
  console.log();
}

export function copyDir(srcDir: any, destDir: any) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

function copy(src: any, dest: any) {
  const stat = fs.statSync(src);
  return stat.isDirectory() ? copyDir(src, dest) : fs.copyFileSync(src, dest);
}

function isEmpty(path: any) {
  const files = fs.readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === ".git");
}

function emptyDir(dir: any) {
  if (!fs.existsSync(dir)) {
    return;
  }
  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file);
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      fs.rmdirSync(abs);
    } else {
      fs.unlinkSync(abs);
    }
  }
}

createApp().catch((error) => {
  console.error(error);
});
