import styled from 'styled-components'


export const Photo = styled.img`
  margin: 20px auto;
  display: block;
  background-color: #98d7ea;
  width: 200px;
  &:hover {
  background-color: red 
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #adacb5;
  padding-top: 50px;
  
  div{
    width: 300px;
    background-color: white;

  }
  p {
    text-align: center;
    font-size: large;
    margin: 0 0 0 0;
    
  } 

  ul {
    width: 300px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    border: 1px;
    /* background-color: yellow; */
    padding: 16px 0 16px 0;
    margin-top: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    border: 1px solid tomato;
    width: 100px;
    padding: 20px 0 20px 0;
    background-color: white;
    align-items: center;
  } 
`
