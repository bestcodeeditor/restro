import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import Img from "gatsby-image"
import Rater from "react-rater"
import "react-rater/lib/react-rater.css"

export default function CatItem({ menus }) {
  const { name, price, ingredients } = menus
  const { fixed } = menus.img
  return (
    <MenuWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price"> ₹{price}</h3>
        </div>
        <p className="info">{ingredients}</p>
        <Rater total={5} rating={4} />
      </div>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }

  .img {
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }

  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }

  .info {
    margin-top: 0.4rem;
    word-spacing: 0.2rem;
    text-transform: lowercase;
  }
`
