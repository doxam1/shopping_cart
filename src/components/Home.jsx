import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  background: url("img/rushBrain.webp") center/cover;
  height: calc(100vh - 6em);
`;

const H2 = styled.h2`
  color: #fff;
  background-color: black;
  padding: 1em;
  border-radius: 1em;
`;

const Home = () => {
  return (
    <Wrapper>
      <H2>We&apos;ve got everything you need!</H2>
    </Wrapper>
  );
};

export default Home;
