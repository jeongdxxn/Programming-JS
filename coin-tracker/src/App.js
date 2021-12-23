import { useEffect, useState } from "react";

// option 에서 코인을 선택했을때, 검색했을때와 동일하게 텍스트 표시

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [searchOpt, setSearchOpt] = useState("name");
  const [keyword, setKeyword] = useState("");
  const [searched, setSearched] = useState("");
  const [nowSearch, setNowSearch] = useState(false);
  const [result, setResult] = useState([]);
  const [noResult, setNoReslt] = useState(false);
  const [pay, setPay] = useState(0);

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/tickers");
      const json = await res.json();
      setCoins(json);
      setLoading(false);
    };
    fetchCoins();
  }, []);

  const onChangeOpt = (event) => setSearchOpt(event.target.value);
  const onChangeValue = (event) => setKeyword(event.target.value);
  const onSubmit = (event) => {
    setSearched(keyword);
    event.preventDefault();
    let isResult = false;
    if (searchOpt === "name") {
      coins.map((coin) => {
        if (coin.name.toUpperCase() === keyword.toUpperCase()) {
          isResult = true;
          setResult(coin);
          setNoReslt(false);
          setNowSearch(true);
          return;
        }
      });
    } else if (searchOpt === "symbol") {
      coins.map((coin) => {
        if (coin.symbol.toUpperCase() === keyword.toUpperCase()) {
          isResult = true;
          setResult(coin);
          setNoReslt(false);
          setNowSearch(true);
          return;
        }
      });
    }
    if (!isResult) {
      setNoReslt(true);
      setNowSearch(false);
    }
    setKeyword("");
  };
  const payment = (event) => setPay(parseFloat(event.target.value));

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>

      <form onSubmit={onSubmit}>
        <select onChange={onChangeOpt}>
          <option value="name">Name</option>
          <option value="symbol">Symbol</option>
        </select>
        <input
          type="search"
          onChange={onChangeValue}
          value={keyword}
          placeholder={searchOpt}
        />
        <input type="submit" value="Find Coin" />
      </form>

      {nowSearch ? (
        <form>
          <h2>Calculate USD to {result.symbol}</h2>
          <input onChange={payment} type="text" placeholder="USD" />
          <h3>
            You can get {pay / result.quotes.USD.price} {result.symbol}
          </h3>
        </form>
      ) : null}

      {noResult ? (
        <form>
          <h2>
            This {searchOpt} has not found : {searched}
          </h2>
        </form>
      ) : null}

      <br />
      <hr />
      <br />

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

// function App() {
  
//   const [loading, setLoading] = useState(true)
//   const [coins, setCoins] = useState([])

//   useEffect(() => {
//     fetch('https://api.coinpaprika.com/v1/tickers')
//       .then((res) => res.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false)
//       })
//   }, [])

//   return (
//     <div>
//       <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
//       {loading ? <strong>Loading...</strong> 
//       : <select>
//         {coins.map((coin) => (
//           <option>
//             {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
//           </option>
//         ))}
//         </select>  
//       } 
      
//     </div>
//   )
// }

export default App