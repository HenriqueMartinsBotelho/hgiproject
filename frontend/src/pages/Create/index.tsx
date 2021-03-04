import React, { useState } from "react";
import { Container, Wrapper, Form, Input, Button, Title } from "./styles";
import axios from "axios";

const Cadastro: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  const createUser = (
    name: String,
    email: String,
    password: String,
    date: String
  ) => {
    axios
      .post("http://localhost:3333/api/insert", {
        name: name,
        email: email,
        password: password,
        date: date,
      })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
      });
  };

  return (
    <Container>
      <Title>Cadastro de usuário</Title>
      <Wrapper>
        <Form onSubmit={() => {}}>
          <Input
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Input
            type="email"
            name="email"
            placeholder="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            type="password"
            name="password"
            placeholder="senha"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="confirmação"
            onChange={() => {}}
          />

          <Input
            type="date"
            name="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />

          <Button
            onClick={(e) => {
              e.preventDefault();
              createUser(name, email, password, date);
            }}
          >
            Cadastrar
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Cadastro;
