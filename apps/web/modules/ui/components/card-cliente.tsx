import { Card } from "@ui/components/card";
import { Button } from "@ui/components/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import * as React from "react";

const CardCliente = ({...props}) => {
	return (
		<div>
			<Card className=" mt-6 sm:w-full md:w-80 p-4 overflow-hidden text-foreground/80 transition duration-300 hover:scale-105" {...props}>
				<div className="ml-4 flex flex-col gap-1">
					<h3 className="text-lg font-semibold self-start">{props.nome}</h3>
					<p className="text-sm text-foreground/80 self-start">{props.telefone}</p>
					<p className="text-sm text-foreground/80 self-start">{props.email}</p>
					<Link className="flex flex-col" href={`/app/clientes/cliente`}>
						<Button className="mt-2 w-40 self-center" variant="ghost">
							Ver Detalhes
							<ArrowRight className="h-4 w-4"></ArrowRight>
						</Button>
					</Link>
				</div>
			</Card>
		</div>
	);
}

export {
	CardCliente,
};
