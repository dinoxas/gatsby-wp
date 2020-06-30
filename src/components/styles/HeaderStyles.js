import styled from "styled-components"

export const HeaderWrapper = styled.header`
  background: #452475;
  margin-bottom: 1.45rem;
  height: 70px;
  border-bottom: 1px solid #362066;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;

  img {
    max-width: 150px;
    margin: 0;
    padding: 12px 0 0 0;
  }

  .menu {
    display: flex;
    align-items: center;
  }
`
