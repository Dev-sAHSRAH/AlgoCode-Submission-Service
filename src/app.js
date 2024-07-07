const fastifyPlugin = require("fastify-plugin");
const servicePlugin = require("./services/servicePlugin");
const todoRoutes = require("./routes/api/v1/submissionRoutes");
const repositoryPlugin = require("./repositories/repositoryPlugin");

/**
 *
 * @param {Fastify object} fastify
 * @param {*} options
 */
async function app(fastify, options) {
  await fastify.register(require("@fastify/cors"));

  await fastify.register(todoRoutes, { prefix: "/todos" });
  //   register test routes
  await fastify.register(require("./routes/api/apiRoutes"), {
    prefix: "/api",
  });

  await fastify.register(repositoryPlugin);
  await fastify.register(servicePlugin);
}

module.exports = fastifyPlugin(app);
