import './App.css';
import Bulb from './components/Bulb';
import Counter from './components/Counter';
import Register from './components/Register';

// 부모 component
function App() {
  return (
    <>
      {/* <Bulb />
      <Counter /> */}
      <Register />
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
