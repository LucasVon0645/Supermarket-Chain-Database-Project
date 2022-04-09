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
        <S.Subtitle>Pedidos</S.Subtitle>
        <S.SectionBlock>
            <S.SectionTitle>Consultar itens de um pedido</S.SectionTitle>
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
        {handleCreateList(arrayEmployees)}
      </div>
    </PageTemplate>
  );
};

export default Orders;
