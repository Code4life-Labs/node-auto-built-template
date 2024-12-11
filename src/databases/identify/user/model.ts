import { Model } from "sequelize";

// Import types
import type { Sequelize, DataTypes } from "sequelize";

export default function (sequelize: Sequelize, dataTypes: typeof DataTypes) {
  class User extends Model {
    // Define static functions
    static associate(models: any) {}
  }

  User.init(
    {
      id: {
        type: dataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: dataTypes.STRING,
        defaultValue: "",
      },
    },
    { sequelize, modelName: "User" }
  );

  return User;
}
