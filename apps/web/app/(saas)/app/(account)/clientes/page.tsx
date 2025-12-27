"use client";

import { PageHeader } from "@saas/shared/components/PageHeader";
import { Button } from "@ui/components/button";
import { CardCliente } from "@ui/components/card-cliente";
import { Input } from "@ui/components/input";
import {
	PlusIcon,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ClientesPage() {
	
	const clientesCadastrados = [
		{
		"id": 1,
		"nome": "Ana Carolina Souza",
		"email": "ana.carolina.souza@exemplo.com.br",
		"telefone": "(11) 98765-4321",
		"avatar": ""
		},
		{
		"id": 2,
		"nome": "Bruno Henrique Costa",
		"email": "bruno.henrique.costa@exemplo.com.br",
		"telefone": "(21) 99876-5432",
		"avatar": ""
		},
		{
		"id": 3,
		"nome": "Carla Roberta Oliveira",
		"email": "carla.roberta.oliveira@exemplo.com.br",
		"telefone": "(31) 97654-3210",
		"avatar": ""
		},
		{
		"id": 4,
		"nome": "Daniel Silva Santos",
		"email": "daniel.silva.santos@exemplo.com.br",
		"telefone": "(41) 96543-2109",
		"avatar": ""
		},
		{
		"id": 5,
		"nome": "Elaine Cristina Almeida",
		"email": "elaine.cristina.almeida@exemplo.com.br",
		"telefone": "(51) 95432-1098",
		"avatar": ""
		},
		{
		"id": 6,
		"nome": "Fernando Luiz Pereira",
		"email": "fernando.luiz.pereira@exemplo.com.br",
		"telefone": "(61) 94321-0987",
		"avatar": ""
		},
		{
		"id": 7,
		"nome": "Gabriela Mendes Rocha",
		"email": "gabriela.mendes.rocha@exemplo.com.br",
		"telefone": "(71) 93210-9876",
		"avatar": ""
		},
		{
		"id": 8,
		"nome": "Hugo Rafael Nogueira",
		"email": "hugo.rafael.nogueira@exemplo.com.br",
		"telefone": "(81) 92109-8765",
		"avatar": ""
		},
		{
		"id": 9,
		"nome": "Isabela Ferreira Lima",
		"email": "isabela.ferreira.lima@exemplo.com.br",
		"telefone": "(91) 91098-7654",
		"avatar": ""
		},
		{
		"id": 10,
		"nome": "João Victor Ribeiro",
		"email": "joao.victor.ribeiro@exemplo.com.br",
		"telefone": "(12) 90987-6543",
		"avatar": ""
		},
		{
		"id": 11,
		"nome": "Karen Thais Pires",
		"email": "karen.thais.pires@exemplo.com.br",
		"telefone": "(13) 98877-6655",
		"avatar": ""
		},
		{
		"id": 12,
		"nome": "Lucas Eduardo Gomes",
		"email": "lucas.eduardo.gomes@exemplo.com.br",
		"telefone": "(14) 97766-5544",
		"avatar": ""
		},
		{
		"id": 13,
		"nome": "Mariana Alves Barbosa",
		"email": "mariana.alves.barbosa@exemplo.com.br",
		"telefone": "(15) 96655-4433",
		"avatar": ""
		},
		{
		"id": 14,
		"nome": "Nelson Xavier Monteiro",
		"email": "nelson.xavier.monteiro@exemplo.com.br",
		"telefone": "(16) 95544-3322",
		"avatar": ""
		},
		{
		"id": 15,
		"nome": "Patrícia Dantas Vasconcelos",
		"email": "patricia.dantas.vasconcelos@exemplo.com.br",
		"telefone": "(17) 94433-2211",
		"avatar": ""
		},
		{
		"id": 16,
		"nome": "Ricardo Menezes Sales",
		"email": "ricardo.menezes.sales@exemplo.com.br",
		"telefone": "(18) 93322-1100",
		"avatar": ""
		}
	]
	
	const [searchTerm, setSearchTerm] = useState("");


	return (
		<div className="">
			<PageHeader
				title="Clientes"
				subtitle="Lista de clientes de seu escritório."
			/>

			<div className="flex items-center gap-10">
				<Input
					type="search"
					placeholder="Buscar clientes..."
					className="w-80 h-12 max-w-sm"
					onChange={(e) => setSearchTerm(e.target.value)}
				></Input>
				
				<Link href="/app/clientes/novocliente">
					<Button className="ml-2 h-10" variant="primary">
						<PlusIcon className="size-4" />
						Cadastrar Cliente
					</Button>
				</Link>
			</div>

			<div className="mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:grid list-none">

				{clientesCadastrados.filter((item) => {
					return item.nome.toLowerCase().includes(searchTerm.toLowerCase()) || item.email.toLowerCase().includes(searchTerm.toLowerCase())
				}).map((cliente) => (
					<li key={cliente.id}>
						<CardCliente nome={cliente.nome} telefone={cliente.telefone} email={cliente.email} />
					</li>
				))}
			</div>
		</div>
	);
}