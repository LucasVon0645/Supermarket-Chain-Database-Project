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
  const [unity, setUnity] = useState("");
  const [arrayEmployees, setArrayEmployees] = useState([]);

  const handleCreateList = (employeesList: any) => {
    return employeesList.map((item: { [x: string]: string }) => {
      return (
        <p>{"Nome: " + item["Nome"] + " / Salário: " + item["Salário"]}</p>
      );
    });
  };

  return (
    <PageTemplate>
      <div>
        <h1>Funcionários</h1>
        <S.Description>Preencha as informações a seguir para consulta.</S.Description>
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
        {handleCreateList(arrayEmployees)}
      </div>
    </PageTemplate>
  );
};

export default Employees;
