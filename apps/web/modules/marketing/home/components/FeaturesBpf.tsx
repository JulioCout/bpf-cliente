"use client";

import { cn } from "@ui/lib";

import Image, { type StaticImageData } from "next/image";
import { type JSXElementConstructor, type ReactNode, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@ui/components/tabs";

import targetIcon from "../../../../public/images/icons/target.svg";
import clockIcon from "../../../../public/images/icons/clipboard-clock.svg";
import handCoinIcon from "../../../../public/images/icons/hand-coins.svg";
import arrowUpDownIcon from "../../../../public/images/icons/arrow-down-up.svg";
import walletIcon from "../../../../public/images/icons/wallet.svg";
import usersIcon from "../../../../public/images/icons/users.svg";
import fileCheckIcon from "../../../../public/images/icons/file-check.svg";
import searchCheckIcon from "../../../../public/images/icons/search-check.svg";
import landmarkIcon from "../../../../public/images/icons/landmark.svg";
import msgAlertIcon from "../../../../public/images/icons/message-circle-warning.svg";
import msgIcon from "../../../../public/images/icons/messages-square.svg";
import workflowIcon from "../../../../public/images/icons/workflow.svg";
import routerIcon from "../../../../public/images/icons/router.svg";
import shieldIcon from "../../../../public/images/icons/shield-check.svg";

import featRH from "../../../../public/images/feat-rh.jpg";
import featProcesso from "../../../../public/images/feat-processos.jpg";
import featFinanceiro from "../../../../public/images/feat-financeiro.jpg";
import featCliente from "../../../../public/images/feat-cliente.jpg";
import featDocumentos from "../../../../public/images/feat-documentos.jpg";


export const featureTabs: Array<{
	id: string;
	title: string;	
	image?: StaticImageData;
	highlights?: {
		title: string;
		description: string;
		icon: JSXElementConstructor<any>;
	}[];
}> = [
	{
		id: "featRh",
		title: "RH",
		image: featRH,
		highlights: [
			{
				title: "Gestão de Folha e Encargos",
				description:
					"Realizamos o fechamento da folha de pagamento, cálculo de horas extras, férias e benefícios, garantindo que o escritório esteja sempre em dia com as obrigações trabalhistas.",
				icon: handCoinIcon,
			},
			{
				title: "Recrutamento Especializado",
				description:
					"Selecionamos talentos com o perfil técnico e cultural ideal para o seu escritório, desde estagiários até advogados seniores, otimizando o tempo dos sócios.",
				icon: targetIcon,
			},
			{
				title: "Controle de Ponto e Escalas",
				description:
					"Realizamos o controle de ponto e escalas, garantindo que o escritório esteja sempre em dia com as obrigações trabalhistas.",
				icon: clockIcon,
			},
		],
	},
	{
		id: "featFinanceiro",
		title: "Financeiro",
		image: featFinanceiro,
		highlights: [
			{
				title: "Fluxo de Caixa e Projeções",
				description:
					"Tenha uma visão clara das entradas e saídas com relatórios detalhados e projeções futuras, permitindo decisões baseadas em dados reais de lucratividade.",
				icon: arrowUpDownIcon,
			},
			{
				title: "Gestão de Contas a Pagar e Receber",
				description:
					"Cuidamos de todo o ciclo de pagamentos e cobranças de honorários, reduzindo a inadimplência através de réguas de cobrança profissionais e educadas.",
				icon: walletIcon,
			},
			{
				title: "Notas Fiscais e Boletos",
				description:
					"Cuidamos do processo de faturação e emissão de boletos, garantindo que os documentos fiscais sejam emitidos corretamente e enviados aos clientes sem atrasos.",
				icon: fileCheckIcon,
			},
		],
	},
	{
		id: "featProcessos",
		title: "Processos",
		image: featProcesso,
		highlights: [
			{
				title: "Monitoramento Contínuo",
				description:
					"Nosso sistema consulta os tribunais continuamente para capturar novas informações sobre os processos, garantindo que o escritório esteja sempre atualizado sobre prazos e movimentações.",
				icon: searchCheckIcon,
			},
			{
				title: "Cobertura Completa dos Tribunais",
				description:
					"Processos de Todos os tribunais do Brasil, incluindo 1ª e 2ª instâncias, tribunais superiores e tribunais militares.",
				icon: landmarkIcon,
			},
			{
				title: "Alertas de novas movimentações",
				description:
					"Receba notificações imediatas sobre qualquer atualização nos processos, permitindo que os advogados reajam rapidamente a novas informações.",
				icon: msgAlertIcon,
			},
		],
	},
	{
		id: "featClientes",
		title: "Clientes",
		image: featCliente,
		highlights: [
			{
				title: "Histórico e Relacionamento",
				description:
					"Mantenha um registro centralizado de todos os processos com seu cliente, facilitando o atendimento personalizado e o fortalecimento do vínculo com o cliente.",
				icon: usersIcon,
			},
			{
				title: "Atendimento Automatizado",
				description:
				"Canal de comunicação automatizado para dúvidas dos clientes, reduzindo as interrupções por telefone/WhatsApp e liberando tempo dos advogados para focar no trabalho jurídico.",
				icon: msgIcon,
			},
			{
				title: "Centralize as informações",
				description:
					"Relacione os dados de seus clientes aos processos cadastrados e facilite a busca por informações importantes.",
				icon: workflowIcon,
			},
		],
	},
	{
		id: "featDocumentos",
		title: "Documentos",
		image: featDocumentos,
		highlights: [
			{
				title: "Digitalização e Organização",
				description:
					"Transformamos o arquivo físico em digital, facilitando o acesso remoto seguro para toda a equipe.",
				icon: routerIcon,
			},
			{
				title: "Centralize as informações",
				description:
					"Relacione os documentos aos processos cadastrados e facilite a busca por informações importantes.",
				icon: workflowIcon,
			},
			{
				title: "Proteção e Segurança",
				description:
					"Com os documentos salvos na nuvem, garantimos backups automáticos e proteção contra perda de dados.",
				icon: shieldIcon,
			},
		],
	},
];


export function FeaturesBpf() {
	const [selectedTab, setSelectedTab] = useState(featureTabs[0].id);

	const renderIcon = (icon: any, props: any = {}) => {
		if (!icon) return null;
		if (typeof icon === "string") {
			return <img src={icon} {...props} />;
		}
		if ((icon as any)?.src && typeof (icon as any).src === "string") {
			return <Image src={icon as any} {...props} />;
		}
		const IconComp = icon as React.ComponentType<any>;
		return <IconComp {...props} />;
	};

	return (
		<section id="vantagens" className="scroll-my-20 pt-12 lg:pt-16">
			<div className="container max-w-8xl">
				<div className="mx-auto mb-6 lg:mb-0 lg:max-w-6xl lg:text-center">
					<h2 className="font-bold text-3xl lg:text-4xl">
						Quais as vantagens de nos contratar?
					</h2>
					{/* <p className="mt-6 text-balance text-lg opacity-50">
						In this section you can showcase all the features of
						your SaaS provides and how they can benefit your
						clients.
					</p> */}
				</div>

				<div className="mt-8 mb-4">
					<Tabs
						value={selectedTab}
						onValueChange={(value) =>
							setSelectedTab(value as typeof selectedTab)
						}
						data-test="bpf-tabs"
						className="flex justify-center gap-12"
					>
						{featureTabs.map((tab) => (
							<TabsList key={tab.id}>
								<TabsTrigger className="text-2xl" value={tab.id}>
									{tab.title}
								</TabsTrigger>
							</TabsList>
						))}
					</Tabs>
				</div>

				{featureTabs.map((tab) => {
					const filteredHighlights = tab.highlights || [];
					return (
						<div
							key={tab.id}
							className={cn(
								"border-t py-8 first:border-t-0 md:py-12 lg:border lg:first:border-t lg:rounded-3xl lg:p-6",
								selectedTab === tab.id
									? "block"
									: "hidden",
							)}
						>
							<div className="mt-8 mb-4 hidden justify-center items-center lg:flex gap-30">
								<div className="flex flex-col gap-8 w-full max-w-96">

									<div className="flex gap-4">
										{renderIcon(filteredHighlights[0]?.icon, { alt: "features", className: "size-8 text-foreground" })}
										<div className="flex flex-col gap-2 w-full max-w-360 text-justify">
											<h3 className="font-bold">{filteredHighlights[0]?.title}</h3>
											<p className="text-foreground/70">{filteredHighlights[0]?.description}</p>
										</div>
									</div>

									<div className="flex gap-4">
										{renderIcon(filteredHighlights[1]?.icon, { alt: "features", className: "size-8 text-foreground" })}
										<div className="flex flex-col gap-2 w-full max-w-360 text-justify">
											<h3 className="font-bold">{filteredHighlights[1]?.title}</h3>
											<p className="text-foreground/70">{filteredHighlights[1]?.description}</p>
										</div>
									</div>

									<div className="flex gap-4">
										{renderIcon(filteredHighlights[2]?.icon, { alt: "features", className: "size-8 text-foreground" })}
										<div className="flex flex-col gap-2 w-full max-w-360 text-justify">
											<h3 className="font-bold">{filteredHighlights[2]?.title}</h3>
											<p className="text-foreground/70">{filteredHighlights[2]?.description}</p>
										</div>
									</div>
								</div>
								{renderIcon(tab.image, { className: "rounded-xl self-start shadow-lg", alt: "features", loading: "lazy", placeholder: "blur", style: { objectFit: "contain" }, width: 333, height: 500 })}
							</div>
						</div>
					)
				})}
			</div>
		</section>
	);
}
