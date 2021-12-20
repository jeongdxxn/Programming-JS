import { useEffect, useState } from "react";

function App() {
  
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClickUp = () => setValue((prev) => prev + 1);
  const onClickDown = () => setValue((prev) => prev - 1);
  const onClickReset = () => setValue(0)

  const onChange = (event) => setKeyword(event.target.value);

  //? useEffect : state를 변화시킬때 코드를 재실행
  useEffect(() => {
    console.log('I run only once');
  }, []); // 한번만 실행

  useEffect(() => {
    console.log('I run when "keyword" changes.');
  }, [keyword]); // keyword가 변할 때마다 실행

  useEffect(() => {
    console.log('I run when "counter" changes.');
  }, [counter]); // counter가 변할 때마다 실행

  useEffect(() => {
    console.log('I run when keyword & counter change');
  }, [keyword, counter]) // keyword와 counter이 변할 때마다 실행

  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type='text' 
        placeholder='Search here...'
      />
      <h1>{counter}</h1>
      <button onClick={onClickUp}></button>
      <button onClick={onClickDown}></button>
      <button onClick={onClickReset}></button>
    </div>
  )
}

export default App