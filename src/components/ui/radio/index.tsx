import React from 'react';

interface IRadioGroup {
   name: string;
   data: { label: string; value: string }[];
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioGroup({ name, data, onChange }: IRadioGroup) {
   const [selected, setSelected] = React.useState<string>(data[0].value);

   return (
      <div>
         {data.map((item) => (
            <label key={item.value}>
               <input
                  type='radio'
                  name={name}
                  value={item.value}
                  checked={selected === item.value}
                  onChange={(e) => {
                     setSelected(e.target.value);
                     onChange(e);
                  }}
               />
               {item.label}
            </label>
         ))}
      </div>
   );
}
