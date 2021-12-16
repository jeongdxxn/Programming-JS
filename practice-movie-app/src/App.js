import { useEffect, useState } from "react";

function App() {
  
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClickUp = () => setValue((prev) => prev + 1);
  const onClickDown = () => setValue((prev) => prev - 1);
  const onClickReset = () => setValue(0)

  const onChange = (event) => setKeyword(event.target.value);

  console.log('i run all the time');

  useEffect(() => {
    console.log('CALL THE API....');
  }, []);

  return (
    <div>
      <input value={keyword} onChange={onChange} type='text' placeholder='Search here...'/>
      <h1>{counter}</h1>
      <button onClick={onClickUp}></button>
      <button onClick={onClickDown}></button>
      <button onClick={onClickReset}></button>
    </div>
  )
}

export default App