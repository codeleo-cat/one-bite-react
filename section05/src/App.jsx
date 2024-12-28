import './App.css';
import { useState } from 'react';

// 부모 component
function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');

  return (
    <>
      <h1>{light}</h1>
      <button
        // App component를 re-rendering
        onClick={() => {
          // setCount(count + 1);
          setLight(light == 'ON' ? 'OFF' : 'ON');
        }}
      >
        {light === 'ON' ? '끄기' : '켜기'}
      </button>
    </>
  );

  // return (
  //   <>
  //     <Button {...buttonProps} />
  //     <Button text={'카페'} />
  //     <Button text={'블로그'}>
  //       <div>자식요소</div>
  //     </Button>
  //   </>
  // );
}

export default App;
