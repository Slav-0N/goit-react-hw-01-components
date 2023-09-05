import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    width: 308px;
    margin: 100px 0 0 0;
    padding: 20px 0;
    font-size: 34px;
    border: 1px solid tomato;
    text-align: center;
  }

  ul {
    padding: 0;
    display: flex;
    margin: 0 0 100px 0;
  }

  li {
    width: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid tomato;
    padding: 20px 0;
  }
`;
