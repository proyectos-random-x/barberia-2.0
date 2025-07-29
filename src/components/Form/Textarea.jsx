export default function Textarea({
	id,
	label,
	placeholder = '',
	required = false,
	value = '',
	change,
	rows = 4,
}) {
	return (
		<div>
			<label htmlFor={id} className="block font-medium">
				{label}
			</label>
			<div className="mt-2">
				<textarea
					id={id}
					name={id}
					placeholder={placeholder}
					required={required}
					value={value}
					onChange={change}
					rows={rows}
					className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
				/>
			</div>
		</div>
	);
}
