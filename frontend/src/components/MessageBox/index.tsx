import React from "react";

import { Container, Foto, Title, Date, Content, Box, Row } from "./styles";

interface MessageBoxProps {
  fotoLink: string;
  title: string;
  date: string;
  content: string;
}

const MessageBox: React.FC<MessageBoxProps> = ({
  fotoLink,
  title,
  date,
  content,
}) => {
  return (
    <Container>
      <Foto src={fotoLink} />
      <Box>
        <Row>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </Row>
        <Content>{content}</Content>
      </Box>
    </Container>
  );
};

export default MessageBox;
