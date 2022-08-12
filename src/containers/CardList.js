import styled from "styled-components";

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 3rem;
  width: 100%;
  padding: 3rem 0;
`

export default CardList;