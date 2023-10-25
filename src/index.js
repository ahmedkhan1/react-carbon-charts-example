import React from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleBarChart } from '@carbon/charts-react';
import data from './data.js';
import options from './options.js';
import '@carbon/charts-react/styles.css';
import Select from 'react-select';

class App extends React.Component {
  state = {
    data,
    options,
    selectedColor: { value: 1, label: 'Color 1' },
  };

  handleColorChange = (selectedOption) => {
    console.log(selectedOption.value);
    this.setState({
      options: {
        color: {
          pairing: {
            option: selectedOption.value,
          },
        },
      },
      selectedColor: selectedOption,
    });
  };

  render() {
    return (
      <div>
        <Select
          value={this.state.selectedColor}
          onChange={this.handleColorChange}
          options={[
            { value: 1, label: 'Color 1' },
            { value: 2, label: 'Color 2' },
          ]}
        />
        <SimpleBarChart data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
