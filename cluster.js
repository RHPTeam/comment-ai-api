const cluster = require("cluster");

if (cluster.isMaster) {
  console.log("Server running... Cluster System starting... Wait for a minutes!");

  // Count the machine's CPUs
  const cpuCount = require("os").cpus().length;

  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  // Listen for dying workers
  cluster.on("exit", function () {
    cluster.fork();
  });
} else {
  require("./server");
}