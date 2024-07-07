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
  fastify.register(require("@fastify/cors"));

  fastify.register(todoRoutes, { prefix: "/todos" });
  //   register test routes
  fastify.register(require("./routes/api/apiRoutes"), {
    prefix: "/api",
  });

  fastify.register(repositoryPlugin);
  fastify.register(servicePlugin);
}

module.exports = fastifyPlugin(app);
