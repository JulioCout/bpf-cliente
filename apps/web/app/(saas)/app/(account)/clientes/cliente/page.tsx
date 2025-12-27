"use client";

import { PageHeader } from "@saas/shared/components/PageHeader";
import { Card } from "@ui/components/card";
import Link from "next/link";
import { Button } from "@ui/components/button";
import {
	ArrowLeftIcon,
	PencilIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/components/avatar";
// import perfilCarolina from "../../../../../../public/images/perfil-carolina.jpg";


export default function ClientePage() {
	

	return (
		<div className="">
			<div className="flex items-center justify-between">
				<PageHeader
					title="Cliente"
					subtitle="Dados do cliente"
				/>
				<Link href={`/app/clientes`}>
					<Button variant="link">
						<ArrowLeftIcon className="size-4" />
						Voltar
					</Button>
				</Link>
			</div>

			<div className="flex gap-10 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-col">
				
				<div className="p-6 w-70 flex flex-col items-center self-center gap-12">
					<Avatar className="w-28 h-28">
						<AvatarImage src="../../../../../../public/images/perfil-carolina.jpg" />
						<AvatarFallback>AC</AvatarFallback>
					</Avatar>
					<Button className="h-10 w-full" variant="primary">
						<PencilIcon className="size-5" />
						Editar Cadastro
					</Button>
				</div>
				
				<Card className="sm:w-full md:w-full p-6 overflow-hidden text-foreground/80 flex flex-col gap-2">
						<h3 className="text-lg font-semibold self-start">Detalhes do Cliente</h3>
						<p><span className="font-semibold">Nome: </span>Ana Carolina Souza</p> 
						<p><span className="font-semibold">Telefone: </span>(11) 98765-4321</p>
						<p><span className="font-semibold">Telefone 2: </span>...</p>
						<p><span className="font-semibold">Email: </span>ana.carolina.souza@exemplo.com.br</p>
						<p><span className="font-semibold">CPF/CNPJ: </span></p>
						<p><span className="font-semibold">Endereço: </span></p>
						<p><span className="font-semibold">Bairro: </span></p>
						<p><span className="font-semibold">Cidade: </span></p>
						<p><span className="font-semibold">Estado: </span></p>
						<p><span className="font-semibold">CEP: </span></p>
						<p><span className="font-semibold">Cliente desde: </span></p>
						<p><span className="font-semibold">Observações: </span></p>
				</Card>

			</div>
			<Card className="mt-6 sm:w-full md:w-full p-6 overflow-hidden text-foreground/80 flex flex-col gap-2">
				<h3 className="text-lg font-semibold self-start">Processos relacionados ao cliente</h3>
				<p className="text-foreground/50">Não há processos relacionados a este cliente.</p>
			</Card>

		</div>
	);
}