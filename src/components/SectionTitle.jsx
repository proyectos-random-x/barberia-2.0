export default function SectionTitle({ texto, marca }) {
	return (
	 	<div className="text-center py-6">
			<h2 className="text-2xl">{texto}{' '}{marca && <strong className="text-blue-500">{marca}</strong>}</h2>
	 	</div>
	)
}