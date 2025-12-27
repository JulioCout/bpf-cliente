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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/components/select";
import { CardProcesso } from "@ui/components/card-processo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/components/dialog"





export default function ProcessosPage() {

	const listaProcessos = [
		{
			"id": 1,
			"numero_do_processo": "150XXX-82.2022.8.26.0417",
			"partes": "Justiça Pública x Joao Paulo da Silva Souza",
			"tribunal": "TJSP - Paraguaçu Paulista, SP",
			"natureza": "Criminal - Receptação"
		},
		{
			"id": 2,
			"numero_do_processo": "100XXX-49.2022.8.26.0417",
			"partes": "Ministério Público do Estado de São Paulo x João Paul...",
			"tribunal": "TJSP - Paraguaçu Paulista, SP",
			"natureza": "Cível - Pena de Multa"
		},
		{
			"id": 3,
			"numero_do_processo": "215XXX-10.2023.8.26.0001",
			"partes": "Maria Antônia de Oliveira x Banco S.A.",
			"tribunal": "TJSP - São Paulo (Foro Regional I), SP",
			"natureza": "Cível - Indenização por Dano Material"
		},
		{
			"id": 4,
			"numero_do_processo": "005XXX-35.2024.5.02.0075",
			"partes": "Carlos Alberto da Luz x Empresa de Transportes LTDA",
			"tribunal": "TRT-2 - 75ª Vara do Trabalho de São Paulo, SP",
			"natureza": "Trabalhista - Rescisão do Contrato de Trabalho"
		},
		{
			"id": 5,
			"numero_do_processo": "500XXX-99.2021.4.03.6100",
			"partes": "União Federal x João da Silva",
			"tribunal": "TRF-3 - 1ª Vara Federal de São Paulo, SP",
			"natureza": "Federal - Execução Fiscal"
		},
		{
			"id": 6,
			"numero_do_processo": "080XXX-50.2023.8.13.0024",
			"partes": "Ministério Público de MG x Município de Belo Horizonte",
			"tribunal": "TJMG - 1ª Vara da Fazenda Pública, MG",
			"natureza": "Fazenda Pública - Ação Civil Pública"
		},
		{
			"id": 7,
			"numero_do_processo": "301XXX-05.2022.8.06.0001",
			"partes": "Ana Clara Santos x Companhia Aérea",
			"tribunal": "TJCE - 1ª Vara Cível de Fortaleza, CE",
			"natureza": "Cível - Dano Moral"
		},
		{
			"id": 8,
			"numero_do_processo": "000XXX-12.2024.8.19.0001",
			"partes": "Justiça Pública x Pedro Henrique Dantas",
			"tribunal": "TJRJ - 1ª Vara Criminal da Capital, RJ",
			"natureza": "Criminal - Homicídio Qualificado"
		},
		{
			"id": 9,
			"numero_do_processo": "400XXX-77.2023.8.26.0100",
			"partes": "Construtora Alfa LTDA x Condomínio Edifício Beta",
			"tribunal": "TJSP - 1ª Vara Cível de São Paulo, SP",
			"natureza": "Cível - Cobrança"
		},
		{
			"id": 10,
			"numero_do_processo": "099XXX-20.2021.5.05.0005",
			"partes": "Fernanda Lima x Hospital São Lucas",
			"tribunal": "TRT-5 - 5ª Vara do Trabalho de Salvador, BA",
			"natureza": "Trabalhista - Equiparação Salarial"
		}	
	];
	
	const statusOptions = [
		  { value: "ativo", label: "Ativo" },
		  { value: "arquivado", label: "Arquivado" },
		  { value: "concluido", label: "Concluído" },
	];

	const tipoOptions = [
		  { value: "civel", label: "Cível" },
		  { value: "criminal", label: "Criminal" },
		  { value: "trabalhista", label: "Trabalhista" },
	];
	
	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState("");
	const [tipoFilter, setTipoFilter] = useState("");

	const handleCleanFilters = () => {
		setStatusFilter("");
		setTipoFilter("");
	};

	return (
		<div className="">
			<PageHeader
				title="Processos"
				subtitle="Lista de processos de seu escritório."
			/>

			<div className="flex items-center gap-10">
				<Input
					type="search"
					placeholder="Buscar processo..."
					className="w-80 h-12 max-w-sm"
					onChange={(e) => setSearchTerm(e.target.value)}
				></Input>

				<Select
					value={statusFilter}
					onValueChange={(value) => setStatusFilter(value)}
				>
					<SelectTrigger className="w-35 h-12 max-w-sm">
						<SelectValue placeholder="Status" />
					</SelectTrigger>
					<SelectContent>
						{statusOptions.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label} 
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				
				<Select
					value={tipoFilter}
					onValueChange={(value) => setTipoFilter(value)}
				>
					<SelectTrigger className="w-35 h-12 max-w-sm">
						<SelectValue placeholder="Tipo" />
					</SelectTrigger>
					<SelectContent>
						{tipoOptions.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<Button onClick={handleCleanFilters} className="ml-2 h-10" variant="light">
					Limpar Fitros
				</Button>

				<Dialog>
					<form>
						<DialogTrigger asChild>
							<Button variant="primary">
								<PlusIcon className="size-4" />
								Incluir Processo
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Incluir Novo Processo</DialogTitle>
							<DialogDescription>
							Digite abaixo o CNJ do processo que deseja incluir:
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4">
							<Input className="h-10 flex flex-col items-center" type="text" placeholder="Somente Números do CNJ"></Input>
						</div>
						<DialogFooter>
							<Button type="submit">Incluir</Button>
						</DialogFooter>
						</DialogContent>
					</form>
				</Dialog>

				
			</div>
			<div className="list-none grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 md:grid mt-10">
				{listaProcessos.filter((item) => {
					return item.partes.toLowerCase().includes(searchTerm.toLowerCase()) || item.numero_do_processo.toLowerCase().includes(searchTerm.toLowerCase())
				}).map((listaProcessos) => (
					<li key={listaProcessos.id}>
						<CardProcesso numero_do_processo={listaProcessos.numero_do_processo} partes={listaProcessos.partes} tribunal={listaProcessos.tribunal} natureza={listaProcessos.natureza} />
					</li>
				))}
			</div>

		</div>
	);
}