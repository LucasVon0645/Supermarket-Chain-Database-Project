// lib
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import api from "../../services/api";
import PageTemplate from "../../templates/PageTemplate";

import * as S from "./styles";

const Orders: React.FC = () => {
  // constants
  /*   const getEmployees = async () => {
    const { data } = await api.post("/funcionarios", { cargo: role });
    console.log(data);
    const list = data["response"];
    setArrayEmployees(list);
  }; */

  const getOrdersByProduct = async () => {
    setShowListItens(false);
    const { data } = await api.post("/pedidos/produto", { nome: product });
    console.log(data);
    const list = data["response"];
    setArrayOrders(list);
  };

  const getItensOfOrder = async () => {
    setShowListItens(true);
    const { data } = await api.post("/pedidos/itens", { idpedido: order });
    console.log(data);
    const list = data["response"];
    setArrayItens(list);
  };

  const getOrdersOfProvider = async () => {
    setShowListItens(false);
    const { data } = await api.post("/pedidos/fornecedor", { nome: provider });
    console.log(data);
    const list = data["response"];
    setArrayOrders(list);
  };

  const [product, setProduct] = useState("");
  const [order, setOrder] = useState("");
  const [provider, setProvider] = useState("");
  const [arrayOrders, setArrayOrders] = useState([]);
  const [arrayItens, setArrayItens] = useState([]);

  const [showListItens, setShowListItens] = useState(false);

  const handleCreateListOfOrders = (ordersList: any[]) => {
    return ordersList.map((item: { [x: string]: string }, index) => {
      return (
        <S.ResultListItem>
          <S.ResultListItemIndex>{index + 1 + " - "}</S.ResultListItemIndex>
          <S.ResultListItemLabel>{"N° do pedido: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["ID"]}</S.ResultListItemText>
          <S.ResultListItemLabel>
            {"Data de solicitação: "}
          </S.ResultListItemLabel>
          <S.ResultListItemText>
            {item["Data de solicitação"]}
          </S.ResultListItemText>
          <S.ResultListItemLabel>{"Data de entrega: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Data de entrega"]}</S.ResultListItemText>
        </S.ResultListItem>
      );
    });
  };

  const handleCreateListOfItens = (itensList: any[]) => {
    return itensList.map((item: { [x: string]: string }, index) => {
      return (
        <S.ResultListItem>
          <S.ResultListItemIndex>{index + 1 + " - "}</S.ResultListItemIndex>
          <S.ResultListItemLabel>{"Nome: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Nome"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Quantidade: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Quantidade"]}</S.ResultListItemText>
        </S.ResultListItem>
      );
    });
  };

  return (
    <PageTemplate>
      <S.Subtitle>Pedidos</S.Subtitle>
      <S.SearchContentContainer>
        <S.SectionBlock>
          <S.SectionTitle>Consultar todos os itens de um pedido</S.SectionTitle>
          <S.SearchContainer>
            <FormControl>
              <InputLabel htmlFor="order-simple">Nº Pedido</InputLabel>
              <Input
                id="order-simple"
                onChange={(event) => setOrder(event.target.value)}
              />
            </FormControl>
            <Button
              onClick={getItensOfOrder}
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
            Consultar os pedidos de um produto, do mais recente para o mais
            antigo
          </S.SectionTitle>
          <S.SearchContainer>
            <FormControl>
              <InputLabel htmlFor="product-simple">Nome do produto</InputLabel>
              <Input
                id="product-simple"
                onChange={(event) => setProduct(event.target.value)}
              />
            </FormControl>
            <Button
              onClick={getOrdersByProduct}
              variant="contained"
              color="primary"
              style={{ marginLeft: "64px" }}
            >
              pesquisar
            </Button>
          </S.SearchContainer>
        </S.SectionBlock>
        <S.SectionBlock marginTop>
          <S.SectionTitle>
            Consultar todos os pedidos de um fornecedor
          </S.SectionTitle>
          <S.SearchContainer>
            <FormControl>
              <InputLabel htmlFor="role-simple">Nome do fornecedor</InputLabel>
              <Input
                id="role-simple"
                onChange={(event) => setProvider(event.target.value)}
              />
            </FormControl>
            <Button
              onClick={getOrdersOfProvider}
              variant="contained"
              color="primary"
              style={{ marginLeft: "64px" }}
            >
              pesquisar
            </Button>
          </S.SearchContainer>
        </S.SectionBlock>
      </S.SearchContentContainer>
      <S.ResultsContainer>
        <S.ResultTitle>Resultado: </S.ResultTitle>
        {showListItens
          ? handleCreateListOfItens(arrayItens)
          : handleCreateListOfOrders(arrayOrders)}
      </S.ResultsContainer>
    </PageTemplate>
  );
};

export default Orders;
