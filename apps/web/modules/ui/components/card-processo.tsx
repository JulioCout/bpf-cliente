import { Card } from "@ui/components/card";
import { Button } from "@ui/components/button";
import Link from "next/link";
import { ArrowRight, LandmarkIcon, ScaleIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/components/dialog"
import * as React from "react";

const CardProcesso = ({...props}) => {

	
		// "id": 10,
		// "numero_do_processo": "099XXX-20.2021.5.05.0005",
		// "partes": "Fernanda Lima x Hospital São Lucas",
		// "tribunal": "TRT-5 - 5ª Vara do Trabalho de Salvador, BA",
		// "natureza": "Trabalhista - Equiparação Salarial"
	

	return (
		<div>
			<Card className="mt-6 sm:w-full md:w-full p-4 overflow-hidden text-foreground/80 transition duration-300 hover:scale-105" {...props}>
				<div className="ml-4 flex flex-col gap-2">
					<p className="text-sm text-foreground/60 self-start">{props.numero_do_processo}</p>
					<h3 className="text-lg font-semibold self-start">{props.partes}</h3>
					<div className="flex items-center">
						<LandmarkIcon className="inline mr-2 h-4 w-4 text-foreground/80"></LandmarkIcon>
						<p className="text-sm text-foreground/80 self-start">{props.tribunal}</p>
					</div>
					<div className="flex items-center">
						<ScaleIcon className="inline mr-2 h-4 w-4 text-foreground/80"></ScaleIcon>
						<p className="text-sm text-foreground/80 self-start">{props.natureza}</p>
					</div>
					<Dialog>
					<form>
						<DialogTrigger asChild>
							<Button className="mt-2 w-40 self-center" variant="ghost">
								Ver Detalhes
								<ArrowRight className="h-4 w-4"></ArrowRight>
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Demonstração</DialogTitle>
							<DialogDescription>
							Contudo somente para fins de demonstração.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							
						</DialogFooter>
						</DialogContent>
					</form>
					</Dialog>
					
				</div>
			</Card>
		</div>
	);
}

export {
	CardProcesso,
};
