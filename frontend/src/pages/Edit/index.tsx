import axios from "axios";
import React, { useEffect, useState } from "react";
import UserRow from "../../components/UserRow";

import { Container } from "./styles";

const Editar: React.FC = () => {
  const [userList, setUserList] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3333/api/get").then((response) => {
      setUserList(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Edição e Remoção de Usuários</h1>
      {userList.map((user) => {
        return <UserRow id={user.id} username={user.name} />;
      })}
    </Container>
  );
};

export default Editar;
