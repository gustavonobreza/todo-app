import { PrismaClient } from "@prisma/client";
import { fastify } from "./server";

const prisma = new PrismaClient();

fastify.get("/", async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      password: false,
      email: true,
      id: true,
      name: true,
      username: true,
    },
    take: 150,
  });

  return res.send(users);
});

fastify.listen(3000, (err, addr) => {
  if (!err) {
    console.log(`🔥 Running in ${addr} 🔥`);
  } 
});
