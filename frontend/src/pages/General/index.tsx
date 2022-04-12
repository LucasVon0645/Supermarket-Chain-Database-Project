// lib
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import api from "../../services/api";
import PageTemplate from "../../templates/PageTemplate";

import * as S from "./styles";

const General: React.FC = () => {
  // constants
  const getSupermarkets = async () => {
    setShowListSupermarkets(true);
    const { data } = await api.get("/supermercados");
    console.log(data);
    const list = data["response"];
    setArraySupermarket(list);
  };

  const getProviders = async () => {
    setShowListSupermarkets(false);
    const { data } = await api.get("/fornecedores");
    console.log(data);
    const list = data["response"];
    setArrayProviders(list);
  };

  const [showListSupermarkets, setShowListSupermarkets] = useState(true);
  const [arraySupermarkets, setArraySupermarket] = useState([]);
  const [arrayProviders, setArrayProviders] = useState([]);

  const handleCreateListSupermarkets = (supermarketsList: any[]) => {
    return supermarketsList.map((item: { [x: string]: string }, index) => {
      return (
        <S.ResultListItem>
          <S.ResultListItemIndex>{index + 1 + " - "}</S.ResultListItemIndex>
          <S.ResultListItemLabel>{"Unidade: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["ID"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Endereço: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Endereço"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Telefone: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Telefone"]}</S.ResultListItemText>
        </S.ResultListItem>
      );
    });
  };

  const handleCreateListProviders = (providersList: any[]) => {
    return providersList.map((item: { [x: string]: string }, index) => {
      return (
        <S.ResultListItem>
          <S.ResultListItemIndex>{index + 1 + " - "}</S.ResultListItemIndex>
          <S.ResultListItemLabel>{"Nome: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Nome"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"CNPJ: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["CNPJ"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Endereço: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Endereço"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Email: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Email"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Telefone: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Telefone"]}</S.ResultListItemText>
        </S.ResultListItem>
      );
    });
  };

  return (
    <PageTemplate>
      <S.Subtitle>Geral</S.Subtitle>
      <S.SectionBlock>
        <S.SearchContainer>
          <S.SectionTitle>
            Listar todas as unidades de supermercado?
          </S.SectionTitle>
          <Button
            onClick={getSupermarkets}
            variant="contained"
            color="primary"
            style={{ marginLeft: "64px" }}
          >
            pesquisar
          </Button>
        </S.SearchContainer>
      </S.SectionBlock>
      <S.SectionBlock style={{marginTop: "32px"}}>
        <S.SearchContainer>
          <S.SectionTitle>Listar todos os fornecedores?</S.SectionTitle>
          <Button
            onClick={getProviders}
            variant="contained"
            color="primary"
            style={{ marginLeft: "64px" }}
          >
            pesquisar
          </Button>
        </S.SearchContainer>
      </S.SectionBlock>
      <S.ResultsContainer>
        <S.SectionTitle>
          <b>Resultado: </b>
        </S.SectionTitle>
        {showListSupermarkets
          ? handleCreateListSupermarkets(arraySupermarkets)
          : handleCreateListProviders(arrayProviders)}
      </S.ResultsContainer>
    </PageTemplate>
  );
};

export default General;
