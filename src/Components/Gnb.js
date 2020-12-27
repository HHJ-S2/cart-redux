import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const controlActivation = [
  { path: "/men", content: "남성복" },
  { path: "/woman", content: "여성복" },
  { path: "/etc", content: "잡화" },
  { path: "/cart", content: <FontAwesomeIcon icon={faShoppingCart} /> },
];

function Gnb() {
  return (
    <Header>
      <Container>
        <Link to="/">Logo</Link>
        <Wrapper>
          <Menu>
            {controlActivation.map((menu, idx) => {
              return (
                <li key={idx}>
                  <Link to={menu.path}>{menu.content}</Link>
                </li>
              );
            })}
          </Menu>
        </Wrapper>
      </Container>
    </Header>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.container};
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 30px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.pryColor};
  }
`;

const Header = styled.header`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;

  li {
    a {
      display: inline-block;
      font-size: 16px;
      padding: 15px;
      color: #111;

      &:hover {
        color: ${({ theme }) => theme.color.pryColor};
      }
    }
  }

  li + li {
    margin-left: 15px;
  }
`;

export default Gnb;
