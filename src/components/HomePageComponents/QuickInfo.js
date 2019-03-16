import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="an authentic restaurant" title="spice in" />
        <QuickInfoWrapper>
          <p className="text">
            It’s a fascinating experience to have the spice in settled on the
            table right in front of you and the succulent dishes mesmerize your
            taste.We make you feel like you're not sure whether you went out or
            you came home and confuses you. If it can do both of those things at
            the same time, you're hooked.
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
