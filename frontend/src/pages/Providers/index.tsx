// lib
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import api from "../../services/api";
import PageTemplate from "../../templates/PageTemplate";

import * as S from "./styles";

const Providers: React.FC = () => {
  // constants
  const getProviders = async () => {
    const { data } = await api.post("/fornecedores", { nome: product });
    console.log(data);
    const list = data["response"];
    setArrayProviders(list);
  };

  const [product, setProduct] = useState("");
  const [arrayProviders, setArrayProviders] = useState([]);

  const handleCreateList = (ProvidersList: any[]) => {
    return ProvidersList.map((item: { [x: string]: string }, index) => {
      return (
        <S.ResultListItem>
          <S.ResultListItemIndex>{index + 1 + " - "}</S.ResultListItemIndex>
          <S.ResultListItemLabel>{"Nome: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["Nome"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"CNPJ: "}</S.ResultListItemLabel>
          <S.ResultListItemText>{item["CNPJ"]}</S.ResultListItemText>
          <S.ResultListItemLabel>{"Custo: "}</S.ResultListItemLabel>
          <S.ResultListItemText>
            {" R$" + item["Custo"] + ",00"}
          </S.ResultListItemText>
        </S.ResultListItem>
      );
    });
  };

  return (
    <PageTemplate>
      <S.Subtitle>Fornecedores</S.Subtitle>
      <S.Description>
        Preencha as informações a seguir para consultar a lista de todos os
        fornecedores de um certo produto.
      </S.Description>
      <S.SearchContainer>
        <FormControl>
          <InputLabel htmlFor="role-simple">Nome do produto</InputLabel>
          <Input
            id="role-simple"
            onChange={(event) => setProduct(event.target.value)}
          />
        </FormControl>
        <Button
          onClick={getProviders}
          variant="contained"
          color="primary"
          style={{ marginLeft: "64px" }}
        >
          pesquisar
        </Button>
      </S.SearchContainer>
      <S.ResultsContainer>
        <S.SectionTitle>
          <b>Resultado: </b>
        </S.SectionTitle>
        {handleCreateList(arrayProviders)}
      </S.ResultsContainer>
    </PageTemplate>
  );
};

export default Providers;
