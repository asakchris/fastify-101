export default async function (fastify, opts) {
  fastify.addHook("onRequest", async (req, reply) => {
    req.hookTwo = "yes";
  });
}
