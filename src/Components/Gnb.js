import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const controlActivation = [
  { path: "/men", content: "남성복" },
  { path: "/woman", content: "여성복" },
  { path: "/etc", content: "잡화" },
];

function Gnb() {
  const products = useSelector((store) => store.productsReducer);

  return (
    <Nav>
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
            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <Count>{products.cartItems.length}</Count>
              </Link>
            </li>
          </Menu>
        </Wrapper>
      </Container>
    </Nav>
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

const Nav = styled.nav`
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
      position: relative;
      display: inline-block;
      font-size: 18px;
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

const Count = styled.span`
  position: absolute;
  right: 3px;
  top: 10px;
  display: block;
  width: 16px;
  height: 16px;
  padding-top: 0px;
  background: tomato;
  border-radius: 50%;
  text-align: center;
  font-size: 11px;
  font-weight: 400;
  color: #fff;
`;

export default Gnb;
