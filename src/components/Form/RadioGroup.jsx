export default function RadioGroup({
	id,
	label,
	options = [],
	name,
	value,
	onChange,
	required = false,
}) {
	return (
		<div className="mb-4">
			<label htmlFor={id} className="block font-medium mb-2">{label}</label>
			<div className="flex flex-col gap-2">
				{options.map((option) => (
					<label key={option} className="inline-flex items-center gap-2">
						<input
							type="radio"
							name={name}
							value={option}
							checked={value === option}
							onChange={onChange}
							required={required}
							className="accent-indigo-600"
						/>
						<span className="capitalize">{option}</span>
					</label>
				))}
			</div>
		</div>
	);
}
