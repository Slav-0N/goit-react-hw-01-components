import styled from 'styled-components';

export const TrColor = styled.tr`
  background-color: ${props =>
    props.$linecolor === 1 ? '#b5e7f5' : '#f5edf1'};
`;

export const TransactionTable = styled.table`
  background-color: #f0f5f5;
  margin: 100px auto;
  width: 600px;
  text-align: center;

  thead {
    font-size: 24px;
    background-color: #2fd6d1;
  }

  tbody {
    font-size: 20px;
  }
`;
