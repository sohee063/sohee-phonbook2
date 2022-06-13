import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./component/ContactForm";
import { Row, Col, Container } from "react-bootstrap";
import ContactList from "./component/ContactList";

// 1. 왼쪽에는 연락처 등록 폼, 오른쪽에는 연락처 리스트와 서치창이 있다.
// 2. 리스트에는 유저 이름과 전화번호를 추가 할 수 있다.
// 3. 리스트에 아이템이 몇개있는지 보인다.
// 4. 사용자가 유저를 이름으로 검색할 수 있다.

function App() {
  return (
    <div>
      <h1 className="title">SOHEE 연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
