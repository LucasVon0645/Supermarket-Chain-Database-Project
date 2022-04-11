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

const Orders: React.FC = () => {
  // constants
  const getEmployees = async () => {
    const { data } = await api.post("/funcionarios", { cargo: role });
    console.log(data);
    const list = data["response"];
    setArrayEmployees(list);
  };

  const [role, setRole] = useState("");
  const [unity, setUnity] = useState("");
  const [arrayEmployees, setArrayEmployees] = useState([]);

  const handleCreateList = (employeesList: any[]) => {
    return employeesList.map((item: { [x: string]: string }, index) => {
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
        <S.Subtitle>Pedidos</S.Subtitle>
        <S.SearchContentContainer>
          <S.SectionBlock>
              <S.SectionTitle>Consultar todos os itens de um pedido</S.SectionTitle>
              <S.SearchContainer>
                  <FormControl>
                      <InputLabel htmlFor="role-simple">Nº Pedido</InputLabel>
                      <Input
                      id="role-simple"
                      onChange={(event) => setRole(event.target.value)}
                      />
                  </FormControl>
                  <Button onClick={getEmployees} variant="contained" color="primary" style={{marginLeft: '64px'}}>
                      pesquisar
                  </Button>
              </S.SearchContainer>
          </S.SectionBlock>
          <S.SectionBlock marginLeft>
              <S.SectionTitle>Consultar o pedido mais recente de um produto</S.SectionTitle>
              <S.SearchContainer>
                  <FormControl>
                      <InputLabel htmlFor="role-simple">Nome do produto</InputLabel>
                      <Input
                      id="role-simple"
                      onChange={(event) => setRole(event.target.value)}
                      />
                  </FormControl>
                  <Button onClick={getEmployees} variant="contained" color="primary" style={{marginLeft: '64px'}}>
                      pesquisar
                  </Button>
              </S.SearchContainer>
          </S.SectionBlock>
        </S.SearchContentContainer>
        <S.ResultsContainer>
          <S.ResultTitle>Resultado: </S.ResultTitle>
          {handleCreateList(arrayEmployees)}
        </S.ResultsContainer>
      </div>
    </PageTemplate>
  );
};

export default Orders;
