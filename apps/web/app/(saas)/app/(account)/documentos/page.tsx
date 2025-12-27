"use client";

import { PageHeader } from "@saas/shared/components/PageHeader";
import { Button } from "@ui/components/button";
import { CardCliente } from "@ui/components/card-cliente";
import { Input } from "@ui/components/input";
import { Checkbox } from "@ui/components/checkbox";
import { Label } from "@ui/components/label";
import { Card } from "@ui/components/card";
import {
	PlusIcon,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/components/dialog"
import { Field } from "@ui/components/field";
import { CardDocumento } from "@ui/components/card-documento";


// import UserStart from "@saas/start/UserStart";


export default function DocumentosPage() {
	
	const [searchTerm, setSearchTerm] = useState("");

	const arquivos = [
		{
			"id": 1,
			"nome": "Contrato Social Empresa Alpha Revisao 2025.pdf",
			"data": "15-03-2025"
		},
		{
			"id": 2,
			"nome": "Parecer Juridico Tributario IRPJ CSLL Cliente Beta.pdf",
			"data": "02-07-2025"
		},
		{
			"id": 3,
			"nome": "Peca Processual Contestacao Processo Civel 456.pdf",
			"data": "20-01-2025"
		},
		{
			"id": 4,
			"nome": "Procuracao Ad Judicia Especial Cliente Gama.pdf",
			"data": "10-11-2025"
		},
		{
			"id": 5,
			"nome": "Acordo Extrajudicial Trabalhista Funcionario X.pdf",
			"data": "28-04-2025"
		},
		{
			"id": 6,
			"nome": "Relatorio Due Diligence Aquisicao Empresa Delta.pdf",
			"data": "05-08-2025"
		},
		{
			"id": 7,
			"nome": "Notificacao Extrajudicial Quebra Contrato Fornecedor Epsilon.pdf",
			"data": "14-02-2025"
		},
		{
			"id": 8,
			"nome": "Peticao Inicial Acao Revisional Contrato Bancario.pdf",
			"data": "18-06-2025"
		},
		{
			"id": 9,
			"nome": "Ata Reuniao Socios Alteracao Capital Social.pdf",
			"data": "25-10-2025"
		},
		{
			"id": 10,
			"nome": "Minuta Contrato Locacao Imovel Comercial.pdf",
			"data": "09-05-2025"
		},
		{
			"id": 11,
			"nome": "Recurso Apelacao Sentenca Processo Criminal 123.pdf",
			"data": "01-09-2025"
		},
		{
			"id": 12,
			"nome": "Certidao Negativa Debito Fiscal Cliente Zeta.pdf",
			"data": "03-03-2025"
		},
		{
			"id": 13,
			"nome": "Termo Confidencialidade NDA Projeto Secreto Kappa.pdf",
			"data": "19-12-2025"
		},
		{
			"id": 14,
			"nome": "Consulta Previa Registro Marca INPI Produto Lambda.pdf",
			"data": "08-01-2025"
		},
		{
			"id": 15,
			"nome": "Manifestacao Juizado Especial Civel Audiencia Conciliacao.pdf",
			"data": "30-07-2025"
		},
		{
			"id": 16,
			"nome": "Aditivo Contratual Prorrogacao Prazo Servicos Cliente Mu.pdf",
			"data": "12-04-2025"
		},
		{
			"id": 17,
			"nome": "Sentenca Judicial Favoravel Acao Indenizatoria.pdf",
			"data": "22-08-2025"
		},
		{
			"id": 18,
			"nome": "Guia Pagamento Custas Processuais Federal.pdf",
			"data": "28-11-2025"
		},
		{
			"id": 19,
			"nome": "Parecer Compliance Lei Geral Protecao Dados LGPD.pdf",
			"data": "17-05-2025"
		},
		{
			"id": 20,
			"nome": "Relatorio Mensal Andamento Processos Setembro 2025.pdf",
			"data": "15-09-2025"
		}
	]

	return (
		<div>
			<PageHeader
				title="Documentos"
				subtitle="Todos os seus Documentos."
			/>

			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-10">
					<Input
						type="search"
						placeholder="Buscar documento..."
						className="w-80 h-12 max-w-sm"
						onChange={(e) => setSearchTerm(e.target.value)}
					></Input>
					<Dialog>
						<form>
							<DialogTrigger asChild>
								<Button variant="primary">
									<PlusIcon className="size-4" />
									Salvar Novo Documento
								</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>Salvar Novo Documento</DialogTitle>
								<DialogDescription>
								Clique ou arraste o documento para o campo abaixo para salvar um novo documento
								</DialogDescription>
							</DialogHeader>
							<div className="grid gap-4">
								
								<Input className="h-25 flex flex-col items-center" type="file">
								</Input>
								
							</div>
							<DialogFooter>
								<Button type="submit">Salvar</Button>
							</DialogFooter>
							</DialogContent>
						</form>
						</Dialog>
					
					{/* <Link href="/app/clientes/novocliente">
						<Button className="ml-2 h-10" variant="primary">
							<PlusIcon className="size-4" />
							Salvar Novo Documento
						</Button>
					</Link> */}
				</div>
				<div className="flex gap-7">
					<div className="flex gap-2 items-center">
						<Checkbox />
						<Label>PDF</Label>
					</div>
					<div className="flex gap-2 items-center">
						<Checkbox />
						<Label>Docx</Label>
					</div>
					<div className="flex gap-2 items-center">
						<Checkbox />
						<Label>Excel</Label>
					</div>
					<div className="flex gap-2 items-center">
						<Checkbox />
						<Label>Imagem</Label>
					</div>
				</div>
			</div>
			<Card className="mt-8 h-120 p-5 list-none grid-cols-3 gap-6 md:grid overflow-y-auto">
					{arquivos.filter((arquivo) => {
						return arquivo.nome.toLowerCase().includes(searchTerm.toLowerCase())
					}).map((arquivo) => (
						<li key={arquivo.id}>
							<CardDocumento nome={arquivo.nome} data={arquivo.data} />
						</li>
					))}
					
			</Card>
		</div>
		
	);
}
