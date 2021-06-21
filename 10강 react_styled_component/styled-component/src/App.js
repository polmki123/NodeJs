import logo from './logo.svg';
import './App.css';
import styled from "styled-components"

// 모든 컴포넌트 설정 가능 
// 외부 자바 스크립트 다 사용 가능 
// css 요소를 자바 스크립트 안에서 관리가 가능하다. 
const color = 'red'
const Components = styled.h1`
  display : ${props => props.isloaded ? 'block' : 'none'};
  color : ${color};
`
// 아래와 같이 상속을 받아서 사용 할 수 있다. 
const Wrapper = styled(Components)`
  background-color : gray;
  margin : 20px; 
`
function App() {
  return (
    <Wrapper isloaded>
      <Components isloaded>complete</Components> 
    </Wrapper>
  );
}

export default App;
