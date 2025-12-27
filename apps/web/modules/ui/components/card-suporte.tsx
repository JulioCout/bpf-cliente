import { Card } from "@ui/components/card";
import { Button } from "@ui/components/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import * as React from "react";

const CardSuporte = ({...props}) => {
	

	return (
		<div>
			<Card className="flex flex-col w-full p-6 gap-4 overflow-hidden transition duration-300 hover:scale-105" {...props}>
				<div className="flex justify-between text-sm font-medium text-foreground/70">
					<p>{props.numero}</p>
					<p>{props.data}</p>
					<p>{props.status}</p>
				</div>
				<div>
					<p><span className="text-bold">Assunto: </span>{props.assunto}</p>
				</div>
				<Button className="w-40 self-center" variant="ghost">
					Ver Detalhes
					<ArrowRight className="h-4 w-4"></ArrowRight>
				</Button>
			</Card>
		</div>
	);
}

export {
	CardSuporte,
};
