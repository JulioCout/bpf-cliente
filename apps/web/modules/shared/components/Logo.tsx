import { cn } from "@ui/lib";
import Image from "next/image";
import logoscale from "../../../../web/public/images/scale.png"

export function Logo({
	withLabel = true,
	className,
}: {
	className?: string;
	withLabel?: boolean;
}) {
	return (
		<span
			className={cn(
				"flex items-center font-semibold text-foreground leading-none",
				className,
			)}
		>
			
			<Image
				src={logoscale}
				alt="Exemplo Logo"
				width={32}
				height={32}
				className="h-8 w-8"
			/>
			{withLabel && (
				<span className="ml-3 hidden text-lg md:block">Logo Exemplo</span>
			)}
		</span>
	);
}
