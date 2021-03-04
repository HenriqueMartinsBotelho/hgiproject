import axios from "axios";
import React, { useEffect, useState } from "react";

import { Container, Wrapper, Form, Input, Button, Title } from "./styles";

const Modal = ({ onClose = () => {}, children }) => {
  const css = `
  .modal {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
 }
  .modal .container {
    background-color: #fff;
    color: #000;
    width: 60%;
    height: 60%;
    border-radius: 20px;
 }
  .modal .container .close {
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 64px);
    top: 16px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
 }
  .modal .container .close:before, .modal .container .close:after {
    content: ' ';
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: #000;
 }
  .modal .container .close:before {
    transform: rotate(45deg);
 }
  .modal .container .close:after {
    transform: rotate(-45deg);
 }
  
  `;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  const updateUser = (id, name, email, password, date) => {
    axios.put(`http://localhost:3333/api/update/${id}`, {
      id: id,
      name: name,
      email: email,
      password: password,
      date: date,
    });
  };

  return (
    <>
      <style>{css}</style>
      <div className="modal">
        <div className="container">
          <button className="close" onClick={onClose} />
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
                  updateUser(3, name, email, password, date);
                }}
              >
                Atualizar
              </Button>
            </Form>
          </Wrapper>
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
