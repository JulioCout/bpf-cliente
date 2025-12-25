import { LocaleLink } from "@i18n/routing";
import { config } from "@repo/config";
import { Logo } from "@shared/components/Logo";

export function Footer() {
	return (
		<footer className="border-t py-8 text-foreground/60 text-sm">
			<div className="container grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div>
					<Logo className="opacity-70 grayscale" />
					<p className="mt-3 text-sm opacity-70">
						© 2025. {" "}
						<a href="https://www.datapraxi.com" target="_blank" rel="noreferrer" className="hover:text-foreground">
							Desenvolvido por Data Praxi
						</a>
						.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<LocaleLink href="/#inicio" className="block">
						Inicio
					</LocaleLink>

					<a href="#servicos" className="block">
						Serviços
					</a>

					<a href="/#vantagens" className="block">
						Vantagens
					</a>
				</div>

				<div className="flex flex-col gap-2">
					<LocaleLink href="/legal/privacy-policy" className="block">
						Política de Privacidade
					</LocaleLink>

					<LocaleLink href="/legal/terms" className="block">
						Termos e condições
					</LocaleLink>
				</div>
			</div>
		</footer>
	);
}
