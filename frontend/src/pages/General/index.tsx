// lib
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import api from "../../services/api";
import PageTemplate from "../../templates/PageTemplate";

import * as S from "./styles";


const General: React.FC = () => {
  // constants
  const getSupermarkets = async () => {
    const { data } = await api.get("/supermercados");
    console.log(data);
    const list = data["response"];
    setArraySupermarket(list);
  };

  const [arraySupermarkets, setArraySupermarket] = useState([]);

  const handleCreateList = (employeesList: any[]) => {
    return employeesList.map((item: { [x: string]: string }, index) => {
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

  return (
    <PageTemplate>
      <div>
        <S.Subtitle>Geral</S.Subtitle>
        <S.SectionBlock>
          <S.SearchContainer>
          <S.SectionTitle>Listar todas as unidades de supermercado?</S.SectionTitle>
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
        <S.ResultsContainer>
          <S.SectionTitle><b>Resultado: </b></S.SectionTitle>
          {handleCreateList(arraySupermarkets)}
        </S.ResultsContainer>
      </div>
    </PageTemplate>
  );
};

export default General;