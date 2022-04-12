import styled from 'styled-components'
import { Button } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/MenuOpenOutlined";
import ExitIcon from "@material-ui/icons/ArrowBackIos";
import Supermarket from "@material-ui/icons/LocalGroceryStoreRounded"

// interfaces

export const StyledMenuIcon = styled(MenuIcon)`
// styled components
   && {
    color: #FFF;
   }
`

export const StyledExitIcon = styled(ExitIcon)`
   && {
    color: #FFF;
   }
`
export const StyledSupermarket = styled(Supermarket)`
   && {
    color: #1f1f20;
    margin-bottom: -4px;
    margin-left: 8px;
   }
`

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PageContent = styled.div`
    padding: 32px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin-left: 100px;
`;

export const Title = styled.h1`
    font-size: 40px;
    font-family: 'Poppins';
    font-weight: 600;
    color: #1f1f20;
`

export const Menu = styled.div`
    position: sticky;
    height: 100vh;
    width: 80px;
    background-color: #2b4c7e;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    position: fixed;
`

export const DrawerContainer = styled.div`
    background-color: #2b4c7e;
    width: 400px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`;

export const DrawerHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    height: 6.2rem;
    padding-right: 1rem;
    margin-bottom: 0px;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListItemStyled = styled(Button)`
    && {
        padding: 1.2rem 1.6rem;
        display: flex;
        justify-content: center;
        height: 4.8rem;
        width: 300px;
    }
`;

export const MenuItem = styled.p`
    color: #FFF;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
`;

export const StyledDivider = styled.div`
    background-color: #FFF;
    height: 1px;
    width: 100%;
`;