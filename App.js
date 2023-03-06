import './App.css';
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const[loading, setLoading] = useState(true); // 로딩
  const[coins, setCoins] = useState([]);
  const[dollar, setDollar] = useState(0); // 0으로 시작

  const onChange = (event) => {
    setDollar(event.targer.value);
  }

  useEffect( () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    }
    );
  }, []); /**데이터 더미 */

  return (<>
    
    <div className="Main-Title">
      <h1>The Coins !</h1>
      <h3>Coin's Number : {coins.length}</h3>
      {loading ? <strong>Loading...</strong> : (
        <select>
          {coins.map((coin) => 
            <option>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          )}
        </select>
        )}

      <div className='little'>
        <input className="input" text-indent type="text" placeholder="Input Your Money (dollar)">
        </input>
        <button onClick={onChange}>
          Click
        </button>
        <br/><text>Your Dollar($) : {dollar}</text>
      </div>


    </div>

    
    <div className="App">
      <header className="App-header">
        <p>
          내용
        </p>

      </header>
    </div>
    
    </>);
}

export default App;
