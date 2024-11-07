import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  place-items: center;
  place-content: center;
  flex-direction: column;
  /* width: 100%; */
  height: 200px;
  gap: 1em;
  font-size: 1.3rem;
`;

const link = ({ className, children }) => (
  <Link className={className}>{children}</Link>
);

const StyledLink = styled(link)`
  text-decoration: none;
  background-color: #1889e6;
  padding: 0.5em 1em;
  border-radius: 20px;
`;

const ErrorElement = () => {
  return (
    <>
      <Wrapper>
        <div>Sorry, couldn&apos;t find that page.</div>
        <StyledLink to="/">Back</StyledLink>
      </Wrapper>
    </>
  );
};

export default ErrorElement;
