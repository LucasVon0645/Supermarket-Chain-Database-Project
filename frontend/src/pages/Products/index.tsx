// lib
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import api from "../../services/api";
import PageTemplate from "../../templates/PageTemplate";

import * as S from "./styles";

// services

// utils

// hooks

// icons

// components

// interfaces

const Products: React.FC = () => {
  // constants
  const getProducts = async () => {
    const { data } = await api.post("/funcionarios", { cargo: role });
    console.log(data);
    const list = data["response"];
    setArrayProducts(list);
  };

  const [role, setRole] = useState("");
  const [unity, setUnity] = useState("");
  const [arrayProducts, setArrayProducts] = useState([]);

  const handleCreateList = (ProductsList: any[]) => {
    return ProductsList.map((item: { [x: string]: string }, index) => {
      return (
        <S.ResultListItem>
          <S.ResultListItemIndex>{index + 1 + " - "}</S.ResultListItemIndex>
          <S.ResultListItemLabel>{"Nome: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Nome"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Salário: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Salário"]}</S.ResultListItemText>
        </S.ResultListItem>
      );
    });
  };
  return (
    <PageTemplate>
      <div>
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
                  onChange={(event) => setRole(event.target.value)}
                />
              </FormControl>
              <Button
                onClick={getProducts}
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
                  onChange={(event) => setRole(event.target.value)}
                />
              </FormControl>
              <S.InputWrapper>
                <FormControl>
                  <InputLabel htmlFor="unity-simple">Nº Pedido</InputLabel>
                  <Input
                    id="unity-simple"
                    onChange={(event) => setUnity(event.target.value)}
                  />
                </FormControl>
              </S.InputWrapper>
              <Button
                onClick={getProducts}
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
          {handleCreateList(arrayProducts)}
        </S.ResultsContainer>
      </div>
    </PageTemplate>
  );
};

export default Products;
