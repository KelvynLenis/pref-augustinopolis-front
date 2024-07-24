'use client'

import React, { useState } from 'react';

const options = [
  "Pago",
  "CNPJ Fornecedor",
  "Nome Fornecedor",
  "Data Emissão",
  "Número nota",
  "Valor nota",
  "Aliq Retenção",
  "Valor Retenção",
  "Imprimir",
];

export const Autocomplete: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="w-full px-2 text-sm py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-0 focus:ring-blue-200"
        placeholder="Todos os campos"
      />
      {filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto mt-1">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setInputValue(option);
                setFilteredOptions([]);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};