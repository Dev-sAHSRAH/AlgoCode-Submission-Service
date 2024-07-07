const fastify = require("fastify")({ logger: true });
const app = require("./app");
const serverConfig = require("./config/serverConfig");

fastify.register(app);

fastify.listen({ port: serverConfig.PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server up at PORT : ${PORT}`);
});
