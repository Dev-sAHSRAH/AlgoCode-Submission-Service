const testController = require("../../../../controllers/testControllers");

async function testRoute(fastify, options) {
  fastify.get("/ping", testController.pingRequest);
}

module.exports = testRoute;
