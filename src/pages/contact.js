import React from "react"

import Layout from "../components/layout"
import {
  PageHeader,
  Banner,
  Form,
  Input,
  Title1,
  Title2,
  Text,
  Button,
  Textarea,
} from "../utils"
import contactImage from "../images/bcg/contactBcg.jpg"
import styled from "styled-components"
import { styles } from "../utils"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImage}>
      <Banner title="contact us" subtitle="let's get in touch" />
    </PageHeader>
    <ContactWrapper style={{ margin: "auto", justifyContent: "center" }}>
      <from
        action="https://formspree.io/bestcodeeditor@gmail.com"
        method="POST"
      >
        <Label>
          <Title1>name:</Title1>
          <Input type="text" name="name" id="name" placeholder="Rakesh" />
        </Label>
        <Label>
          <Title1>email:</Title1>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email@gmail.com"
          />
        </Label>
        <Label>
          <Title1>description:</Title1>
          <Textarea
            name="description"
            id="description"
            placeholder="Write to us"
          />
        </Label>

        <Button type="submit" value="Send">
          Submit
        </Button>
      </from>
    </ContactWrapper>
  </Layout>
)

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  background: ${styles.colors.lightGrey};
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`

export default ContactPage
