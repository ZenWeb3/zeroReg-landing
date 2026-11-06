export const PACKAGE_NAME = "zeroreg";

export const GITHUB_URL = "https://github.com/zenweb3/zeroreg";
export const GITHUB_PY_URL = "https://github.com/zenweb3/zeroreg-py";
export const NPM_URL = "https://npmjs.com/package/zeroreg";
export const PYPI_URL = "https://pypi.org/project/zeroreg";
export const DOCS_URL = "/docs";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun" | "pip";

export const INSTALL_COMMANDS: Record<PackageManager, string> = {
  npm: `npm install ${PACKAGE_NAME}`,
  pnpm: `pnpm add ${PACKAGE_NAME}`,
  yarn: `yarn add ${PACKAGE_NAME}`,
  bun: `bun add ${PACKAGE_NAME}`,
  pip: `pip install ${PACKAGE_NAME}`,
};