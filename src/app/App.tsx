import React from 'react';
import './App.css';
import BitCoinPriceCard from './components/BitCoinPriceCard'
import { getLastPrice } from './api/bitcoinpricesapi';

class App extends React.Component<{}, {lastPrice: number}> {
  state = {
    lastPrice: 0
  }
  componentDidMount() {
    getLastPrice().then((data) => {
      this.setState({
        lastPrice: data.market_price_usd || 0
      })
    })
  }
  render = () => (
    <div className="App">
      <BitCoinPriceCard value={this.state.lastPrice} />
    </div>
  );
}

export default App;
