"use client";

import { cn } from "@ui/lib";
import Image, { type StaticImageData } from "next/image";
import { type JSXElementConstructor, type ReactNode, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@ui/components/tabs";

import { Input } from "@ui/components/input";
import { Button } from "@ui/components/button";




export function ContactBpf() {
	

	return (
		<section id="contato" className="scroll-my-20 p-10 bg-[#fecd6c]">
			<div className="flex justify-center items-center gap-10 px-4 py-12 max-w-7xl mx-auto">
				<div className="max-w-500 flex flex-col gap-3">
					<h2 className="text-5xl font-bold mb-3 w-full max-w-96">Veja uma Demonstração</h2>
					<p className="max-w-md">
						Solicite uma demonstração e receba um orçamento personalizado para o seu escritório.
					</p>
					<p className="max-w-md">
						Preencha o formulário e entraremos em contato com você em breve!
					</p>
				</div>
				<div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
					<Input className="text-sm" id="endereco" autoComplete="off" placeholder="Seu nome" />
					<Input className="text-sm" id="endereco" autoComplete="off" placeholder="Seu melhor e-mail" />
					<Input className="text-sm" id="endereco" autoComplete="off" placeholder="Seu telefone com DDD" />
					<Button variant="primary" className="mt-4 w-full  hover:bg-blue-700">Solicitar Demonstração</Button>
				</div>
			</div>
		</section>
	);
}
