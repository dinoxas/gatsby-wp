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

  .count {
    margin: 0 10px 0 0;
    padding: 0;
    font-size: 0.8rem;
    background: #777;
    color: #fff;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    width: 30px;
    height: 22px;
    display: block;
    text-align: center;
    float: left;
  }

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
    margin: 0 0 5px 0px;
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
