import styled from "styled-components";

const Container = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export { Container, ContainerLeft };
