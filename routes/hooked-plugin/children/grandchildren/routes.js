export default async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const response = {
      ...(request.hookOne && { hookOne: request.hookOne }),
      ...(request.hookTwo && { hookTwo: request.hookTwo }),
    };
    reply.send(response);
  });
}
