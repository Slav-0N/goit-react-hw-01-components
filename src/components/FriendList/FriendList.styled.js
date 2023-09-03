import styled from 'styled-components'

export const Markered = styled.span`
  background-color:  ${ (props)=> props.markering === "true" ? 'green' : 'red' };
`


export const ListWithFriends = styled.ul`
  width: 200px;
  background-color: yellow;
  margin: 0 auto;
  padding: 0;

  li {
    font-size: 50px;
    display: flex;
    gap: 10px;
    border: 1px solid #c7b991;
    padding: 10px 0;
  }



  p {
    font-size: 20px;
    color: black;
  }

  span {
    margin: auto 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`