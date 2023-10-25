import React, { useState } from 'react';
import { SimpleBarChart } from '@carbon/charts-react';
import dataList from './data.js';
import chartOptions from './options.js';
import '@carbon/charts-react/styles.css';
import Select from 'react-select';


export function Charts(){
    const [data, setData] = useState(dataList);
    const [options, setOptions] = useState(chartOptions);
    const [selectedColor, setSelectedColor] = useState({ label: "", value: ""});
    
    const handleColorChange = (selectedOption) => {
      setSelectedColor(selectedOption);
      
      setOptions((prev) => ({
        ...prev,
        axes: {
          ...prev.axes,
          color: {
            pairing: {
              option: selectedOption.value,
            },
          },
        },
      }));
    };

    return (
        <div>
            <h2>Carbon Charts Color Palette Example</h2>
            <Select
                value={selectedColor}
                onChange={handleColorChange}
                options={[
                    { value: 1, label: 'Color 1' },
                    { value: 2, label: 'Color 2' },
                ]}
            />

            <SimpleBarChart 
                data={data} 
                options={options} 
            />
        </div>
    )
}
