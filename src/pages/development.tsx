import Image from "next/image";
import logoCurta from "../../public/assets/L_Curta_Vetorisada.png";

export default function Development() {
	return (
		<>
			<div style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}>
				<Image
					src={logoCurta}
					width={350}
					height={350}
					alt="Picture of the author"
				/>
				<h1 style={{
					paddingTop: "100px",
				}}>
					SITE EM DESENVOLVIMENTO...
				</h1>
				<h3 className="p-6">
					✉️ contato@rcexport.com.br
				</h3>
			</div>
		</>
	);
}
