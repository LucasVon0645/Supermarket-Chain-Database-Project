// lib
import React, { useState } from "react";

// services

// utils

// hooks

// icons

// components
import { Drawer, IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';

// styled-components
import * as S from "./styles";

// interfaces

const PageTemplate: React.FC = ({ children }) => {
  // states
  const [drawer, setDrawer] = useState(false);

  // hooks

  // constants
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <S.PageContainer>
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        <S.DrawerContainer>
          <S.DrawerHeader>
            <IconButton onClick={toggleDrawer}>
              <S.StyledExitIcon fontSize="large" />
            </IconButton>
          </S.DrawerHeader>
          <S.ListContainer>
            <Link  to="/">
              <S.ListItemStyled>
                <S.MenuItem>Pedidos</S.MenuItem>
              </S.ListItemStyled>
            </Link>
            <S.StyledDivider />
            <Link  to="/employees">
              <S.ListItemStyled>
                <S.MenuItem>Funcionários</S.MenuItem>
              </S.ListItemStyled>
            </Link>
            <S.StyledDivider />
            <S.ListItemStyled>
              <S.MenuItem>página 3</S.MenuItem>
            </S.ListItemStyled>
            <S.StyledDivider />
          </S.ListContainer>
        </S.DrawerContainer>
      </Drawer>
      <S.Menu>
        <IconButton onClick={toggleDrawer}>
          <S.StyledMenuIcon fontSize="large" color="inherit" />
        </IconButton>
      </S.Menu>
      <S.PageContent>
          <S.Title>
              Cadeia de Supermercados
        </S.Title>
        {children}
    </S.PageContent>
    </S.PageContainer>
  );
};

export default PageTemplate;
