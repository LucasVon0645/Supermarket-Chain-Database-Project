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

const Employees: React.FC = () => {
  // constants
  const getEmployees = async () => {
    const { data } = await api.post("/funcionarios", { cargo: role });
    console.log(data);
    const list = data["response"];
    setArrayEmployees(list);
  };

  const [role, setRole] = useState("");
  const [, setUnity] = useState("");
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
        <S.Subtitle>Funcionários</S.Subtitle>
        <S.Description>Preencha as informações a seguir para consultar o quadro de funcionários com base no cargo e na unidade.</S.Description>
        <S.SearchContainer>
          <FormControl>
            <InputLabel htmlFor="role-simple">Cargo</InputLabel>
            <Input
              id="role-simple"
              onChange={(event) => setRole(event.target.value)}
            />
          </FormControl>
          <S.InputWrapper>
            <FormControl>
              <InputLabel htmlFor="unity-simple">Unidade</InputLabel>
              <Input
                id="unity-simple"
                onChange={(event) => setUnity(event.target.value)}
              />
            </FormControl>
          </S.InputWrapper>
          <Button onClick={getEmployees} variant="contained" color="primary">
            pesquisar
          </Button>
        </S.SearchContainer>
        <S.ResultsContainer>
          <S.SectionTitle>Resultado: </S.SectionTitle>
          {handleCreateList(arrayEmployees)}
        </S.ResultsContainer>
      </div>
    </PageTemplate>
  );
};

export default Employees;
