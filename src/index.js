const fastify = require("fastify")({ logger: true });
const productRoutes = require("./routes/products.routes");
const db = require("./database/mongo.db");

productRoutes.forEach((route ) => {
  fastify.route(route);
});

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});



const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
