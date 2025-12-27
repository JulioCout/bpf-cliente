"use client";

import { PageHeader } from "@saas/shared/components/PageHeader";
import { Card } from "@ui/components/card";
import Link from "next/link";
import { Button } from "@ui/components/button";
import {
	ArrowLeftIcon,
} from "lucide-react";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@ui/components/field"
import { Input } from "@ui/components/input"



export default function NovoClientePage() {
	

	return (
		<div className="">
			<div className="flex items-center justify-between">
				<PageHeader
					title="Cadastrar Novo Cliente"
					subtitle="Informe os dados do novo cliente abaixo e clique em salvar."
				/>
				<Link href={`/app/clientes`}>
					<Button variant="link">
						<ArrowLeftIcon className="size-4" />
						Voltar
					</Button>
				</Link>
			</div>

			<div className="flex gap-10 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-col">
				
				
				<Card className="sm:w-full md:w-full lg:w-150 p-6 overflow-hidden text-foreground/80 flex flex-col gap-1">
					<FieldSet>
						<FieldGroup>
							<Field orientation="horizontal">
							<FieldLabel className="text-1xl" htmlFor="nome">Nome:</FieldLabel>
							<Input className="text-sm" id="name" autoComplete="off" placeholder="" />
							</Field>
							<Field orientation="horizontal">
							<FieldLabel className="text-1xl" htmlFor="telefone">Telefone:</FieldLabel>
							<Input className="text-sm" id="telefone" autoComplete="off" placeholder="21 99999-9999" />
							</Field>
							<Field orientation="horizontal">
							<FieldLabel className="text-1xl" htmlFor="email">Email:</FieldLabel>
							<Input className="text-sm" id="email" autoComplete="off" placeholder="" />
							</Field>
							<Field orientation="horizontal">
							<FieldLabel className="text-1xl" htmlFor="email">CPF/CNPJ</FieldLabel>
							<Input className="text-sm" id="cpfcnpj" autoComplete="off" placeholder="somente números" />
							</Field>
							<Field orientation="horizontal">
							<FieldLabel className="text-1xl" htmlFor="endereco">Endereço:</FieldLabel>
							<Input className="text-sm" id="endereco" autoComplete="off" placeholder="" />
							</Field>
							<Field orientation="horizontal">
							<FieldLabel className="text-1xl" htmlFor="bairro">Bairro:</FieldLabel>
							<Input className="text-sm" id="bairro" autoComplete="off" placeholder="" />
							</Field>
							<Field orientation="horizontal">
							<FieldLabel className="text-1xl" htmlFor="cidade">Cidade:</FieldLabel>
							<Input className="text-sm" id="cidade" autoComplete="off" placeholder="" />
							</Field>
							<Field orientation="horizontal">
							<FieldLabel className="text-1xl" htmlFor="estado">Estado:</FieldLabel>
							<Input className="text-sm" id="estado" autoComplete="off" placeholder="" />
							</Field>
							<Field orientation="horizontal">
							<FieldLabel className="text-1xl" htmlFor="cep">CEP:</FieldLabel>
							<Input className="text-sm" id="cep" autoComplete="off" placeholder="" />
							</Field>
										
							<Field className="flex justify-center" orientation="horizontal">
								<Button type="submit" variant="primary">Salvar</Button>
								<Link href={`/app/clientes`}>
									<Button variant="outline" type="button">
									Cancelar
									</Button>
								</Link>
							</Field>
						</FieldGroup>
					</FieldSet>
				</Card>
				

			</div>
		</div>
	);
}