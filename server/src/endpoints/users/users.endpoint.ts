// Import classes
import { Endpoints } from "src/classes/Endpoints";

// Import models
import identity from "src/databases/identity";
import task from "src/databases/task";

// Import services
import { AuthMiddlewares } from "src/services/auth/middlewares";

// Import logger builder
import { LoggerBuilder } from "src/logger";

// Import utils
import { RequestUtils } from "src/utils/request";

// Import types
import type { TaskManagerModelsType } from "src/databases/task";

const usersEndpoints = new Endpoints("users");
const logger = new LoggerBuilder().to("users-endpoints").build();
const IdentityModels = identity();
let TaskManagerModels: TaskManagerModelsType = task();
// task().then((models) => {
//   // console.log("TaskEndpoint:", "Connected to MongoDB");
//   TaskManagerModels = models;
// });

// Add your handlers here
/**
 * Get information of users
 * Note: can be used by authorized person only.
 */
usersEndpoints
  .createHandler("")
  .use(AuthMiddlewares.checkToken)
  .use(AuthMiddlewares.createPolicyChecker("admin:*", "admin:getUsers"))
  .get(async (req, res, o) => {
    const profiler = logger.startTimer();
    // Start log
    profiler.logger.info(
      LoggerBuilder.buildEndpointLog(`Request users from admin`, req)
    );

    const { limit, skip } = RequestUtils.getLimitNSkip(req);

    const result = await IdentityModels.User.findAll({ limit, offset: skip });

    // Done
    profiler.done(
      LoggerBuilder.buildEndpointLog(
        `Get tasks from ${skip} to ${skip + limit} successfully`,
        req
      )
    );

    return result;
  });

export default usersEndpoints;
