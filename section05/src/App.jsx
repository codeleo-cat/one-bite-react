import './App.css';
import Header from './components/Header'; // 확장자 생략 가능
import Main from './components/Main';
import Footer from './components/Footer';

// 부모 component
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
