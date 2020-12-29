import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getProductsData, addToCart } from "../store/actions";

export default function ProductList() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.productsReducer);

  useEffect(() => {
    getProductsData().then((result) => {
      dispatch(result);
    });
  }, []);

  console.log("store 확인 >>>", store);

  return (
    <Container>
      <ContentHeader>상품목록</ContentHeader>
      <Products>
        {store.products &&
          store.products.data.map((item, idx) => {
            return (
              <Prodcut key={idx}>
                <img
                  src="http://placehold.it/350x350?text=350x350"
                  alt="상품 썸네일 이미지"
                />
                <h5>{item.title}</h5>
                <p>33,250 원</p>
                <button onClick={() => dispatch(addToCart(item))}>
                  장바구니 담기
                </button>
              </Prodcut>
            );
          })}
      </Products>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.container}
  padding-top: 50px;
`;

const ContentHeader = styled.header`
  margin: 0 0 30px;
  padding: 0 0 15px;
  border-bottom: 2px solid #111;
  font-size: 30px;
  font-weight: 600;
`;

const Products = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Prodcut = styled.li`
  width: calc(100% / 4);
  margin-bottom: 45px;
  padding: 0 10px;

  img {
    width: 100%;
  }

  h5 {
    margin-top: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 600;
  }

  p {
    margin: 10px 0 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.pryColor};
  }

  button {
    padding: 6px 10px;
    background: #111;
    border: none;
    border-radius: 3px;
    font-weight: 600;
    color: #fff;
  }
`;
