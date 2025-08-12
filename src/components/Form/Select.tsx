export default function Select({
	id,
	label,
	name,
	value,
	onChange,
	required = false,
	options = [],
}) {
	return (
		<div className="mb-4">
			<label htmlFor={id} className="block font-medium mb-1">
				{label}
			</label>
			<select
				id={id}
				name={name ?? id}
				value={value}
				onChange={onChange}
				required={required}
				className="block w-full py-2 px-3 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
			>
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
		</div>
	);
}
