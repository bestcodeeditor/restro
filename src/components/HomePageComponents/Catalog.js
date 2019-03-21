import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
import Img from "gatsby-image"
import CatItem from "./CatItem"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Catalog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      menuItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { menuItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { menuItems: items }
      })
    }
  }

  render() {
    console.log(this.state.categories)

    if (this.state.items.length > 0) {
      return (
        <Section>
          <Title title="our cuisine" message="Take a glance" />
          {/* categories */}
          <CategoryList style={{ margin: "3rem auto" }}>
            {this.state.categories.map((category, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className="button"
                  onClick={() => {
                    this.handleItems(category)
                  }}
                >
                  {category}
                </button>
              )
            })}
          </CategoryList>

          {/* items */}

          <MenuList>
            {this.state.menuItems.map(({ node }) => {
              return <CatItem key={node.id} menus={node} />
            })}
          </MenuList>
        </Section>
      )
    } else {
      return (
        <Section className="menu">
          <Title title="our cuisine" />
          <div className="row">
            <h1>there are no item to display</h1>
          </div>
        </Section>
      )
    }
  }
}

const MenuList = styled.div`
  margin: 3rem;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column-gap: 0.25rem;
  grid-row-gap: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  .button {
    margin: 2rem auto;
    display: block;
    border-radius: 2px;
    padding: 0.5em 1em;
    color: ${styles.colors.mainYellow};
    text-transform: capitalize;
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
    ${styles.transition({})};
    &:hover {
      background: ${styles.colors.mainYellow};
      color: ${styles.colors.mainBlack};
      cursor: pointer;
    }
  }
`
