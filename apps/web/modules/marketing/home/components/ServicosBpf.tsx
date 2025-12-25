"use client";

import { cn } from "@ui/lib";
import Image, { type StaticImageData } from "next/image";
import { type JSXElementConstructor, type ReactNode, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@ui/components/tabs";
import { Card } from "fumadocs-ui/components/card";

import emojiClientes from "../../../../public/images/emoji/emoji-clientes.png";
import emojiProcessos from "../../../../public/images/emoji/emoji-processo.png";
import emojiDocumentos from "../../../../public/images/emoji/emoji-documentos.png";
import emojiRh from "../../../../public/images/emoji/emoji-rh.png";
import emojiFinanceiro from "../../../../public/images/emoji/emoji-financeiro.png";




export function ServicosBpf() {
	

	return (
		<section id="servicos" className="scroll-my-20 p-10 bg-[#1255c2]">
			<div className="max-w-5xl mx-auto flex flex-col items-center">
				<h2 className="text-4xl font-bold text-white text-center">Conheça nossos serviços</h2>
				<p className="text-white text-center max-w-1xl mt-3 mb-3">Deixe a burocracia conosco e dedique 100% do seu tempo ao que realmente importa: seus clientes e processos.</p>
				
				<Card className="mt-10 p-8 bg-white shadow-xl w-2xl self-start" title={undefined}>
					<div className="flex gap-6">
						<div className="w-[64px] h-[64px]">
							<Image src={emojiRh} alt="emoji clientes" width={64} height={64} />
						</div>
						<div className="w-full">
							<h3 className="text-2xl font-bold mb-2 text-gray-700">Gestão completa de RH</h3>
							<p className="text-gray-800">Fazemos gestão completa de RH para sua empresa, desde recrutamento até folha de pagamento.</p>
						</div>
					</div>
				</Card>

				<Card className="mt-10 p-8 bg-white shadow-xl w-2xl self-end" title={undefined}>
					<div className="flex gap-6">
						<div className="w-full">
							<h3 className="text-2xl font-bold mb-2 text-end text-gray-700">Administração Financeira</h3>
							<p className="text-gray-800 text-end">Gerenciamos sua contabilidade e finanças com eficiência, garantindo transparência e conformidade fiscal.</p>
						</div>
						<div className="w-[64px] h-[64px]">
							<Image src={emojiFinanceiro} alt="emoji clientes" width={64} height={64} />
						</div>
					</div>
				</Card>

				<Card className="mt-10 p-8 bg-white shadow-xl w-2xl self-start" title={undefined}>
					<div className="flex gap-6">
						<div className="w-[64px] h-[64px]">
							<Image src={emojiProcessos} alt="emoji clientes" width={64} height={64} />
						</div>
						<div className="w-full">
							<h3 className="text-2xl font-bold mb-2 text-gray-700">Monitoramento e Gestão de Processos</h3>
							<p className="text-gray-800">Monitore e gerencie todos os processos da sua empresa de forma eficiente e fácil.</p>
						</div>
					</div>
				</Card>
				
				<Card className="mt-10 p-8 bg-white shadow-xl w-2xl self-end" title={undefined}>
					<div className="flex gap-6">
						<div className="w-full">
							<h3 className="text-2xl font-bold mb-2 text-end text-gray-700">Gestão completa de clientes</h3>
							<p className="text-gray-800 text-end">Organize e gerencie todas as informações dos seus clientes em um só lugar, facilitando o acesso e a comunicação.</p>
						</div>
						<div className="w-[64px] h-[64px]">
							<Image src={emojiClientes} alt="emoji clientes" width={64} height={64} />
						</div>
					</div>
				</Card>

				<Card className="mt-10 p-8 bg-white shadow-xl w-2xl self-start" title={undefined}>
					<div className="flex gap-6">
						<div className="w-[64px] h-[64px]">
							<Image src={emojiDocumentos} alt="emoji clientes" width={64} height={64} />
						</div>
						<div className="w-full">
							<h3 className="text-2xl font-bold mb-2 text-gray-700">Gestão de Documentos</h3>
							<p className="text-gray-800">Organize e gerencie todos os documentos da sua empresa de forma segura e eficiente.</p>
						</div>
					</div>
				</Card>

			</div>
		</section>
	);
}
