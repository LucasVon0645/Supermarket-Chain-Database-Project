import styled from "styled-components";

// interfaces

// styled components
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputWrapper = styled.div`
  margin: 0 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #1f1f20;
`;

export const Subtitle = styled.h1`
  font-size: 28px;
  color: #2b4c7e;
  font-family: "Poppins";
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;
`;

export const ResultListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ResultListItemLabel = styled.p`
  font-size: 16px;
  color: #4180ab;
  margin-right: 4px;
  font-weight: 600;
`;

export const ResultListItemText = styled.p`
  font-size: 16px;
  color: #1f1f20;
  margin-right: 32px;
`;

export const ResultListItemIndex = styled.p`
  font-size: 16px;
  color: #1f1f20;
  margin-right: 4px;
  font-weight: 600;
`;

export const SectionTitle = styled.p`
  font-size: 20px;
  color: #1f1f20;
  font-family: "Poppins";
  font-weight: 600;
`;
