import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function CartList() {
  const productState = useSelector((store) => store.productsReducer);

  console.log(productState);

  return (
    <Container>
      <ContentHeader>장바구니</ContentHeader>
      <CartWrap>
        <thead>
          <tr>
            <th width="15%">상품 선택</th>
            <th width="45%">상품정보</th>
            <th width="20%">수량</th>
            <th width="10%">상품금액</th>
            <th width="10%">삭제</th>
          </tr>
        </thead>
        <tbody>
          {productState &&
            productState.cartItems.map((item, idx) => {
              return (
                <tr key={item.id}>
                  <td>
                    <CartCheck>
                      <input type="checkbox" id={item.id} />
                      <label htmlFor={item.id} />
                    </CartCheck>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <CountBtn>
                      <FontAwesomeIcon icon={faPlus} />
                    </CountBtn>
                    <Count>1</Count>
                    <CountBtn>
                      <FontAwesomeIcon icon={faMinus} />
                    </CountBtn>
                  </td>
                  <td>33,250 원</td>
                  <td>
                    <DefaultBtn>Delete</DefaultBtn>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </CartWrap>
      <PaymentWrap>
        <CheckContents>
          <CartCheck>
            <input type="checkbox" id="all" />
            <label htmlFor="all" />
          </CartCheck>
          <span>전체선택</span>
          <DefaultBtn>선택 취소</DefaultBtn>
        </CheckContents>
        <TotalAmount>
          <span>결제 예정금액</span> <strong>0 원</strong>
        </TotalAmount>
      </PaymentWrap>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.container}
`;

const ContentHeader = styled.header`
  ${({ theme }) => theme.ContentHeader}
  border: none;
`;

const CartWrap = styled.table`
  width: 100%;
  border: 1px solid #111;
  border-top: 2px solid #111;
  border-radius: 5px;
  text-align: center;

  th,
  td {
    padding: 25px 15px;
    vertical-align: middle;
  }

  thead {
    th {
      border-bottom: 1px solid #111;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #ddd;
    }

    tr:last-child {
      border-bottom: none;
    }
  }
`;

const CartCheck = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  width: 26px;
  height: 26px;
  vertical-align: middle;

  input {
    display: none;
  }

  label {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url(./images/checkbox.png);
  }

  input:checked + label {
    background: url(./images/checkbox_act.png);
  }
`;

const Count = styled.span`
  display: inline-block;
  margin: 0 10px 0 13px;
  font-size: 23px;
  vertical-align: middle;
`;

const CountBtn = styled.button`
  padding: 0;
  width: 25px;
  height: 25px;
  background: #111;
  border: none;
  border-radius: 50%;
  font-size: 13px;
  line-height: 25px;
  color: #fff;
`;

const DefaultBtn = styled.button`
  ${({ theme }) => theme.pryBtn}
`;

const PaymentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  padding: 0 25px;
`;

const CheckContents = styled.div`
  span {
    display: inline-block;
    margin-right: 25px;
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 25px;
  min-width: 400px;
  border: 1px solid #111;

  strong {
    font-size: 26px;
    font-weight: 600;
  }
`;
