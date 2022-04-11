// lib
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import api from "../../services/api";
import PageTemplate from "../../templates/PageTemplate";

import * as S from "./styles";


const Equipments: React.FC = () => {
  // constants
  const getEquipments = async () => {
    const { data } = await api.post("/funcionarios", { cargo: role });
    console.log(data);
    const list = data["response"];
    setArrayEquipments(list);
  };

  const [role, setRole] = useState("");
  const [, setUnity] = useState("");
  const [arrayEquipments, setArrayEquipments] = useState([]);

  const handleCreateList = (equipmentsList: any[]) => {
    return equipmentsList.map((item: { [x: string]: string }, index) => {
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
        <S.Subtitle>Equipamentos</S.Subtitle>
        <S.Description>Informe a unidade de um supermercado para listar todos os equipamentos utilizados nele.</S.Description>
        <S.SearchContainer>
            <FormControl>
              <InputLabel htmlFor="unity-simple">Unidade</InputLabel>
              <Input
                id="unity-simple"
                onChange={(event) => setUnity(event.target.value)}
              />
            </FormControl>
          <Button onClick={getEquipments} variant="contained" color="primary" style={{marginLeft: '64px'}}>
            pesquisar
          </Button>
        </S.SearchContainer>
        <S.ResultsContainer>
          <S.SectionTitle><b>Resultado: </b></S.SectionTitle>
          {handleCreateList(arrayEquipments)}
        </S.ResultsContainer>
    </PageTemplate>
  );
};

export default Equipments;
