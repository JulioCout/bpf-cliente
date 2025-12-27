import { Card } from "@ui/components/card";
import Image from "next/image";
import Link from "next/link";
import pdf from "../../../public/images/pdf.png"

import * as React from "react";

const CardDocumento = ({...props}) => {
	return (
		<div>
			<Link href="">
				<Card className="flex gap-4 mt-6 sm:w-full md:w-80 p-4 overflow-hidden text-foreground/80 transition duration-300 hover:scale-105" {...props}>
					<Image className="w-12 h-12" src={pdf} alt={"pdf"} />
					<div>
						<h3>{props.nome}</h3>
						<p className="text-sm text-foreground/50">Incluído em: {props.data}</p>
					</div>
				</Card>
			</Link>
		</div>
	);
}

export {
	CardDocumento,
};
