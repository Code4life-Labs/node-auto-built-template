// Use Sequelize
import path from "path";
import { Sequelize, DataTypes } from "sequelize";

// Import classes
import { DirReader } from "src/classes/DirReader";

// Import configs
import AppConfig from "src/app.config.json";

// Get path of endpoints folder
const rootFolder = AppConfig.folders.databases;
const rootPath = path.resolve(`./src/${rootFolder}/identify`);

const reader = new DirReader();

const databaseName = "";
const databaseUsername = "";
const databasePassword = "";
const databaseHost = "";
const databaseEngine = undefined;

export default async function () {
  const models = {};

  const sequelize = new Sequelize(
    databaseName,
    databaseUsername,
    databasePassword,
    {
      host: databaseHost,
      dialect: databaseEngine,
    }
  );
  const modelFilePaths = await reader.getAllPathsToFiles(rootPath);

  for (const modelFilePath of modelFilePaths) {
    const modelDefault = require(modelFilePath);

    if (!modelDefault.default)
      throw new Error("Model should be exported as default.");

    const model = modelDefault.default;

    // Init
    model(sequelize, DataTypes);
  }

  // Use another for loop to check associate
  for (const key in models) {
  }

  return models;
}
