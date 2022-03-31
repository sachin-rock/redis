const { createClient } = require("redis");

// mongodb://localhost:27017
const client = createClient({ url: "redis://localhost:6379" });

// when client not able to connect to redis it throw an event => "error"
client.on("error", function (err) {
  console.error({ message: err.message });
});

module.exports = client;
