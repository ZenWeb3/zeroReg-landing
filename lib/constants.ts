export const PACKAGE_NAME = "rexi";

export const INSTALL_COMMANDS = {
  npm: `npm install ${PACKAGE_NAME}`,
  pnpm: `pnpm add ${PACKAGE_NAME}`,
  yarn: `yarn add ${PACKAGE_NAME}`,
  bun: `bun add ${PACKAGE_NAME}`,
} as const;

export type PackageManager = keyof typeof INSTALL_COMMANDS;

export const GITHUB_URL = "https://github.com/zenweb3/rexi";
export const NPM_URL = "https://npmjs.com/package/rexi";
export const DOCS_URL = "/docs";