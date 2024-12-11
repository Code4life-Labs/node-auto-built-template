// Use to create ORM for configured database
// Note: you have to setup database's setting in `app.config.json`
// Note: This script is suitable for first initialization and you can
// sync new database's configuration.

const fs = require("fs");
const path = require("path");

// Import utils
const { getSrcPath, getSupportedORM } = require("./utils");

// Import config
const AppConfig = require("../src/app.config.json");
const DatabaseConfig = require("../src/db.config.json");

// Check the `databases` config
const databaseConfigurations = DatabaseConfig.databases;

if (!Array.isArray(databaseConfigurations))
  throw new Error("Configuration of databases must be stored in an Array.");
else if (databaseConfigurations.length === 0)
  throw new Error("Configure of databases cannot be empty.");

console.log(
  "Currently, this script only supports Sequelize\n" +
    "as ORM for MySQL, PostgreSQL, ... and Mongoose for MongoDB.\n" +
    "Please note that - Tuan"
);

console.log("Generating from your `databases` configuration...");

const srcPath = getSrcPath();
const templatePath = path.resolve(srcPath, "..", AppConfig.folders.templates);
const targetDirPath = path.resolve(srcPath, AppConfig.folders.databases);
const sequelizeSetupTemplateName = "sequelize-setup.template";
const mongooseSetupTemplateName = "mongoose-setup.template";
const placeHolders = {
  databaseName: "[DATABASE_NAME]",
  databaseConfigurationIndex: "[INDEX]",
};

// Read templates

for (const config of databaseConfigurations) {
  const orm = getSupportedORM(config.engine);

  switch (orm) {
    /**
     * If the ORM is sequelize, I'll process
     * the configuration follow standard of Sequelize
     */
    case "sequelize": {
      // Replace value in sequelize-setup template

      // Iterate the objects property
      break;
    }

    /**
     * If the ORM is mongoose, I'll process
     * the configuration follow standard of Mongoose
     */
    case "mongoose": {
      // Replace value in mongoose-setup template

      // Iterate the objects property
      break;
    }

    default:
      throw new Error(`The ORM ${orm} isn't supported`);
  }
}

console.log("Done!");
