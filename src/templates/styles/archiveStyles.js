import styled from "styled-components"
import { Link } from "gatsby"

export const PageContent = styled.article`
  margin: 20px 0 0 0;
`

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  :hover {
    color: #fb8400;
  }
`

export const StyledDate = styled.div`
  font-family: "Teko";
  font-size: 1.1rem;
  font-weight: 600;
`

export const StyledReadMore = styled(Link)`
  font-family: "Teko", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  position: relative;
  width: 90px;
  height: 30px;
  display: block;
  background: #8a4baf;
  padding: 3px 0 0 16px;
  margin-bottom: 30px;
  text-shadow: 0 0 0 1px #000;

  :after {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-left-color: #8a4baf;
    border-width: 15px;
    margin-top: -15px;
  }

  :hover {
    background: #542c85;
  }

  :hover:after {
    border-left-color: #542c85;
  }
`
