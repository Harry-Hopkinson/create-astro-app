"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toValidPackageName = exports.isValidPackageName = void 0;
function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName,
  );
}
exports.isValidPackageName = isValidPackageName;
function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/^[._]/, "")
    .replace(/[^a-z0-9-~]+/g, "-");
}
exports.toValidPackageName = toValidPackageName;
