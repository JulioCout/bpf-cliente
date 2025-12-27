"use client";

import { PageHeader } from "@saas/shared/components/PageHeader";
import { Card } from "@ui/components/card";
import { CardSuporte } from "@ui/components/card-suporte";
import { Input } from "@ui/components/input";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@ui/components/button";
import {
	PlusIcon,
} from "lucide-react";


// import UserStart from "@saas/start/UserStart";


export default function SuportePage() {
	const chamados = [
		{
			"id": "TKT-2025-001",
			"data_abertura": "2025-12-10",
			"assunto": "Erro na emissão de nota fiscal de honorários",
			"status": "Aberto",
			"prioridade": "Alta",
			"categoria": "Financeiro"
		},
		{
			"id": "TKT-2025-002",
			"data_abertura": "2025-12-11",
			"assunto": "Dúvida sobre integração com o PJe",
			"status": "Em Atendimento",
			"prioridade": "Média",
			"categoria": "Integrações"
		},
		{
			"id": "TKT-2025-003",
			"data_abertura": "2025-12-08",
			"assunto": "Lentidão ao carregar anexos de processos",
			"status": "Resolvido",
			"prioridade": "Baixa",
			"categoria": "Performance"
		},
		{
			"id": "TKT-2025-004",
			"data_abertura": "2025-12-12",
			"assunto": "Configuração de permissões para novo estagiário",
			"status": "Pendente",
			"prioridade": "Média",
			"categoria": "Configuração"
		},
		{
			"id": "TKT-2025-005",
			"data_abertura": "2025-12-05",
			"assunto": "Recuperação de login e senha do administrador",
			"status": "Fechado",
			"prioridade": "Crítica",
			"categoria": "Acesso"
		}
	];

	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="flex flex-col gap-6 w-full">
			<PageHeader
				title="Suporte"
				subtitle="Crie e consulte as suas solicitações de suporte abaixo"
			/>

			<div className="flex items-center gap-10">
				<Input
					type="search"
					placeholder="Buscar chamados..."
					className="w-80 h-12 max-w-sm"
					onChange={(e) => setSearchTerm(e.target.value)}
				></Input>
				
				<Link href="/app/clientes/novocliente">
					<Button className="ml-2 h-10" variant="primary">
						<PlusIcon className="size-4" />
						Abrir Chamado
					</Button>
				</Link>
			</div>

			<div className="flex gap-5">
				<Card className="p-5 w-3/7 h-150 overflow-y-auto flex flex-col gap-4">
					{chamados.map((chamado) => (
						<CardSuporte
							key={chamado.id}
							numero={chamado.id}
							data={chamado.data_abertura}
							status={chamado.status}
							assunto={chamado.assunto}
						/>
					))}
				</Card>

				<Card className="w-4/7 h-150">
					//Info do Card selecionado
				</Card>
			</div>
		</div>
	);
}
