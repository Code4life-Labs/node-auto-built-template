// Import classes
import { Endpoints } from "src/classes/Endpoints";

// Import models
import task from "src/databases/task";

// Import logger builder
import { LoggerBuilder } from "src/logger";

// Import types
import type { TaskManagerModelsType } from "src/databases/task";

const tasksEndpoints = new Endpoints("tasks");
const logger = new LoggerBuilder().to("tasks-endpoints").build();
let TaskManagerModels: TaskManagerModelsType = task();
// task().then((models) => {
//   // console.log("TaskEndpoint:", "Connected to MongoDB");
//   TaskManagerModels = models;
// });

/**
 * Get all of TaskStatus documents.
 * Note: everyone can use this endpoint.
 */
tasksEndpoints.createHandler("statuses").get(async (req, res) => {
  const profiler = logger.startTimer();
  // Start log
  profiler.logger.info(
    LoggerBuilder.buildEndpointLog("Request task statuses", req)
  );

  const query = TaskManagerModels.TaskStatus.find();
  const result = await query.exec();

  // Done
  profiler.done(
    LoggerBuilder.buildEndpointLog("Get task statuses successfully", req)
  );

  return result;
});

export default tasksEndpoints;
