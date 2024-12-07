import path from "path";

export class StringUtils {
  constructor() {}

  /**
   * Get valid `path` from various string
   * @param parts
   * @returns
   */
  static getPath(...parts: Array<string>) {
    let result = "";

    for (const part of parts) {
      if (part[0] !== "/") result += "/" + part;
      else result += part.replace(/\/{2,}/, "/");
    }

    if (result[0] !== "/") return "/" + result;

    return result;
  }

  /**
   * Get path of root directory
   * @returns
   */
  static getRootDir() {
    return process.cwd();
  }

  /**
   * Get path from root directory to `path`.
   * @param parts
   * @returns
   */
  static getRootDirTo(...parts: Array<string>) {
    return path.resolve(StringUtils.getRootDir(), ...parts);
  }
}
