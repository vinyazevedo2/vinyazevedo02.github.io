-- CreateTable
CREATE TABLE "Enquete" (
    "codigo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAlteracao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Enquete_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "opcaoEnquete" (
    "codigoEnquete" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "enqueteCodigo" TEXT NOT NULL,

    CONSTRAINT "opcaoEnquete_pkey" PRIMARY KEY ("codigoEnquete")
);

-- AddForeignKey
ALTER TABLE "opcaoEnquete" ADD CONSTRAINT "opcaoEnquete_enqueteCodigo_fkey" FOREIGN KEY ("enqueteCodigo") REFERENCES "Enquete"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
