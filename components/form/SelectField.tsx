
import React from 'react';

interface SelectFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: readonly string[];
    error?: string;
    required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, value, onChange, options, error, required }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full h-10 px-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm dark:bg-gray-700 dark:border-gray-600"
        >
            <option value="">Select {label}</option>
            {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

export default SelectField;
