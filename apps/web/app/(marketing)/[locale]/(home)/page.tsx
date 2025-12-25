import { FeaturesBpf } from "@marketing/home/components/FeaturesBpf";
import { ContactBpf } from "@marketing/home/components/ContactBpf";
import { HeroBpf } from "@marketing/home/components/HeroBpf";
import { setRequestLocale } from "next-intl/server";
import { ServicosBpf } from "@marketing/home/components/ServicosBpf";

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<HeroBpf />
			<ServicosBpf />
			<FeaturesBpf />
			<ContactBpf />
		</>
	);
}
