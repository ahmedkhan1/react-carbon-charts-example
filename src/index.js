import React from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleBarChart } from '@carbon/charts-react';
import data from './data.js';
import options from './options.js';
import '@carbon/charts-react/styles.css';

class App extends React.Component {
  state = {
    data,
    options,
    selectedColor: { value: 1, label: 'Color 1' },
  };

  render() {
    return (
      <div>
        <SimpleBarChart data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
