import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
background: url(${({image}) => image && image}) center;
height: 100vh;
display:flex;
justify-content: flex-start;
align-items: flex-end;
margin-top: -60px;
`;


const Contaner = styled.div`
color: #fff;
padding: 2rem;
background-color: rgba(0,0,0,0.4);
margin: 2rem;
border-radius: 10px;

h1{
  font-size: clamp(2rem, 8vw, 5rem);
  margin-bottom: 1rem;
}

p{
  font-size: clamp(1rem, 6vw, 2.5rem);
  margin-bottom: 1rem;
}

button{
  font-size: clamb(1rem, 4vw, 1.2rem);
  padding: 0.8rem 2rem;
  cursor: pointer;
  color: #000;
  background: #ffb347;
  background: linear-gradient(to right, #fccf4a, #f8a634);
  border: none;
  border-radius: 6px;
  outline: none;


}
`;

const Hero = ({image, title, desc}) => {
  return (
    <Section image={image}>
      <Contaner>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button>Learn more</button>
      </Contaner>
    </Section>

  )
}

export default Hero