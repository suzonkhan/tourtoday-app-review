import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="block-title">Question and Answer</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="">What is Context API?</h2>
            <p>
              The Context API used to share data with multiple components,
              without having to pass data through props manually. It is
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Its a way for a React app to
              effectively produce global variables that can be passed around.
              Its should be held by the highest parent component in the stack
              that requires access to the state. To create context, you must
              Import createContext and initialize it. Next we'll use the Context
              Provider to wrap the tree of components that need the state
              Context. In order to use the Context in a child component, we need
              to access it using the useContext Hook.
            </p>

            <h2>What is Semantic tag?</h2>
            <p>
              In programming, Semantics refers to the meaning of a piece of
              code. So, A semantic element clearly describes its meaning to both
              the browser and the developer.
            </p>
            <p>
              In HTML there are some semantic elements that can be used to
              define different parts of a web page and some of them are:  
              <code>
              {
                  ` <article>

                  <aside> 

                  <footer>

                  <header>

                  <main> 

                  <nav>

                  <section> 
                  
                  <time>`
              }
              </code>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
