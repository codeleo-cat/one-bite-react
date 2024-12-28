import './Main.css';
const Main = () => {
  const number = 10;

  const user = {
    name: 'sky',
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  // return (
  //   <main>
  //     <h1>main</h1>
  //     <h2>{number % 2 == 0 ? 'even' : 'odd'}</h2>
  //   </main>
  // );
};

export default Main;
