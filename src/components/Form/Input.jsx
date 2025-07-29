export default function Input({
	type = 'text',
	id,
	label,
	required = false,
	placeholder = '',
	value,
	defaultValue,
	change,
}) {
	return (
		<div className="mb-4">
			<label htmlFor={id} className="block text-sm font-medium text-gray-700">
				{label}{required && <span className="text-red-500">*</span>}
			</label>
			<div className="mt-1 flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
				<input
					type={type}
					id={id}
					name={id}
					className="block w-full py-1.5 pl-1 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
					placeholder={placeholder}
					{...(value !== undefined ? { value, onChange: change } : {})}
					{...(defaultValue !== undefined ? { defaultValue } : {})}
					{...(required ? { required: true, 'aria-required': true } : {})}
				/>
			</div>
		</div>
	);
}
