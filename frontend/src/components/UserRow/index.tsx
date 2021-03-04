import React, { useState } from "react";
import axios from "axios";
import { Container, ActionIcons } from "./styles";
import { IoMdCreate } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";
import Modal from "../Modal";

interface UserRow {
  id: String;
  username: String;
}

const UserRow: React.FC<UserRow> = ({ id, username }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const editUser = (id: String) => {
    setIsModalVisible(!isModalVisible);
  };

  const deleteUser = (id: String) => {
    axios.delete(`http://localhost:3333/api/delete/${id}`);
  };

  return (
    <Container>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}> aa </Modal>
      ) : null}

      <span>{id}</span>
      <span>{username}</span>
      <ActionIcons>
        <button
          onClick={() => {
            editUser(id);
          }}
        >
          <IoMdCreate size="20px" />
        </button>
        <button
          onClick={() => {
            deleteUser(id);
          }}
        >
          <AiTwotoneDelete size="20px" />
        </button>
      </ActionIcons>
    </Container>
  );
};

export default UserRow;
