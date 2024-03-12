import Head from "next/head";
import type { Metadata } from "next";
import "../global/global.css";

export const metadata: Metadata = {
	title: "Rosinha",
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<Head>
				<meta http-equiv="Content-Language" content="pt-BR" />
			</Head>
			<body>{children}</body>
		</html>
	);
}
