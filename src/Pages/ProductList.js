import React from "react";
import styled from "styled-components";

function ProductList() {
  return <Container>Product List</Container>;
}

const Container = styled.div`
  ${({ theme }) => theme.container}
`;

export default ProductList;
