import styled from "styled-components"

export const SidebarWrapper = styled.aside`
  margin: 40px 0 0 0;

  @media (min-width: 992px) {
    margin: 125px 0 0 0;
  }
`

export const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0 20px 0 0;
  margin: 0;

  .sidebar-menu-header {
    font-family: "Teko", Arial, Helvetica, sans-serif;
    border-bottom: 2px #e4e4e4 solid;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 0 0 20px 0;
    padding: 0 0 5px 0;
    text-transform: uppercase;
  }

  li {
    margin: 0 0 5px 38px;
    color: #000;
    font-family: "Teko", Arial;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;

    a:hover {
      color: #fb8400;
    }
  }

  .sidebar-highlighted {
    color: #fb8400;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.2rem;
    letter-spacing: 0.5px;

    a {
      font-weight: 800;
    }
  }

  img {
    float: left;
    padding: 0 10px 0 0;
    width: 38px;
    height: auto;
  }
`

export const EducationBadge = styled.div`
  display: block;

  width: 100%;

  font-family: "Teko", Arial;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;

  margin: 0 0 40px 0;

  a {
    font-family: "Teko", Arial;
    background: #fb8400;
    padding: 12px 16px;
    height: 45px;
    font-size: 20px;
    color: #212121;
    text-align: center;
    display: block;
    font-weight: 200;

    &:hover {
    }
  }
`
