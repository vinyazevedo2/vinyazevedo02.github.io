import { PrismaClient } from "@prisma/client";
import { fastify } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { criarEnquete } from "./routes/criar-enquete";
import { listarEnquetes } from "./routes/listar-enquetes";
import { obterEnquete } from "./routes/obter-enquete";
import { votarEnquete } from "./routes/votar-enquete";

const app = fastify()

/*app.get('/unipar', () => {
    return 'Ola FASTIFY'
})*/

app.register(criarEnquete)
app.register(listarEnquetes)
app.register(obterEnquete)
app.register(votarEnquete)

app.listen({port: 3333}).then( () => {
    console.log('SERVIDOR RODANDO')
})