import styled from "styled-components"
import { styles } from "../utils"

// Forms, inputs, buttons

export const Form = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  width: 600px;
  height: 35px;
  border: ${props => props.border || "1px solid #ccc"};
  background-color: #fff;
  margin-bottom: 0.5rem;
`
export const Textarea = styled.textarea`
  width: 600px;
  height: 150px;
  border: ${props => props.border || "1px solid #ccc"};
  background-color: #fff;
  margin-bottom: 2rem;
`

export const Button = styled.button`
  width: 600px;
  height: 35px;
  background-color: ${styles.colors.mainYellow2};
  color: #fff;
  font-size: 1.8rem;
  border-radius: 5px;
  text-transform: uppercase;
  display: block;
`

// Text

export const Title1 = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: ${styles.colors.mainBlack};
  font-size: 1.5em;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`

export const Title2 = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
  margin-bottom: 2rem;
`

export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#4d4d4d"};
`
