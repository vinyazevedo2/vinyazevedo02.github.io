import { FastifyInstance } from "fastify";
import { request } from "http";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function obterEnquete(app: FastifyInstance){

    app.get('/obterEnquete/:enqueteId', async (request, reply) => {

        const obterParametro = z.object({
            enqueteId : z.string().uuid()
        })

        const {enqueteId} = obterParametro.parse(request.params)
        await prisma.enquete.findUnique({
            where: {
                codigo: enqueteId
            },
            
            include: {
                opcoesEnquete : {
                    select :{
                        codigoEnquete : true,
                        descricao : true
                    }
                }
            }
        })

        reply.send(enqueteId)

    })

}