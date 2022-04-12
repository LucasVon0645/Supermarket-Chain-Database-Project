// lib
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import api from "../../services/api";
import PageTemplate from "../../templates/PageTemplate";

import * as S from "./styles";

const Products: React.FC = () => {
  // constants
  const getProductsInStock = async () => {
    setShowProductsInStock(true);
    const { data } = await api.post("/produtos/estoque", {
      supermercado: unity,
    });
    console.log(data);
    const list = data["response"];
    setArrayProductsInStock(list);
  };

  const getQuantityProductInAOrder = async () => {
    setShowProductsInStock(false);
    const { data } = await api.post("/produtos/pedido", {
      nome: product,
      idpedido: order,
    });
    console.log(data);
    const list = data["response"];
    setArrayQuantityProductInAOrder(list);
  };

  const [unity, setUnity] = useState("");
  const [product, setProduct] = useState("");
  const [order, setOrder] = useState("");
  const [arrayProductsInStock, setArrayProductsInStock] = useState([]);
  const [arrayQuantityProductInAOrder, setArrayQuantityProductInAOrder] =
    useState([]);
  const [showProductsInStock, setShowProductsInStock] = useState(false);

  const handleCreateListProductsInStock = (ProductsInStockList: any[]) => {
    return ProductsInStockList.map((item: { [x: string]: string }, index) => {
      return (
        <S.ResultListItem>
          <S.ResultListItemIndex>{index + 1 + " - "}</S.ResultListItemIndex>
          <S.ResultListItemLabel>{"Nome: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Nome"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Marca: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Marca"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Quantidade: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Quantidade"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Preço: "}</S.ResultListItemLabel>
          <S.ResultListItemText>
            {" R$" + item["Preço"] + ",00"}
          </S.ResultListItemText>
        </S.ResultListItem>
      );
    });
  };

  const handleCreateListQuantityProductInAOrder = (
    QuantityProductInAOrder: any[]
  ) => {
    return QuantityProductInAOrder.map(
      (item: { [x: string]: string }, index) => {
        return (
          <S.ResultListItem>
            <S.ResultListItemIndex>{index + 1 + " - "}</S.ResultListItemIndex>
            <S.ResultListItemLabel>{"Nome: "}</S.ResultListItemLabel>
            <S.ResultListItemText>{item["Nome"]}</S.ResultListItemText>
            <S.ResultListItemLabel>{"Quantidade: "}</S.ResultListItemLabel>
            <S.ResultListItemText>{item["Quantidade"]}</S.ResultListItemText>
          </S.ResultListItem>
        );
      }
    );
  };
  return (
    <PageTemplate>
      <S.Subtitle>Produtos</S.Subtitle>
      <S.SearchContentContainer>
        <S.SectionBlock>
          <S.SectionTitle>
            Consultar todos os produtos disponíveis em estoque em uma unidade.
          </S.SectionTitle>
          <S.SearchContainer>
            <FormControl>
              <InputLabel htmlFor="role-simple">Unidade</InputLabel>
              <Input
                id="role-simple"
                onChange={(event) => setUnity(event.target.value)}
              />
            </FormControl>
            <Button
              onClick={getProductsInStock}
              variant="contained"
              color="primary"
              style={{ marginLeft: "64px" }}
            >
              pesquisar
            </Button>
          </S.SearchContainer>
        </S.SectionBlock>
        <S.SectionBlock marginLeft>
          <S.SectionTitle>
            Consultar a quantidade de um produto em um pedido específico
          </S.SectionTitle>
          <S.SearchContainer>
            <FormControl>
              <InputLabel htmlFor="role-simple">Nome do produto</InputLabel>
              <Input
                id="role-simple"
                onChange={(event) => setProduct(event.target.value)}
              />
            </FormControl>
            <S.InputWrapper>
              <FormControl>
                <InputLabel htmlFor="unity-simple">Nº Pedido</InputLabel>
                <Input
                  id="unity-simple"
                  onChange={(event) => setOrder(event.target.value)}
                />
              </FormControl>
            </S.InputWrapper>
            <Button
              onClick={getQuantityProductInAOrder}
              variant="contained"
              color="primary"
            >
              pesquisar
            </Button>
          </S.SearchContainer>
        </S.SectionBlock>
      </S.SearchContentContainer>
      <S.ResultsContainer>
        <S.ResultTitle>Resultado: </S.ResultTitle>
        {showProductsInStock
          ? handleCreateListProductsInStock(arrayProductsInStock)
          : handleCreateListQuantityProductInAOrder(
              arrayQuantityProductInAOrder
            )}
      </S.ResultsContainer>
    </PageTemplate>
  );
};

export default Products;
