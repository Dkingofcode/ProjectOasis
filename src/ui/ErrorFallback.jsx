import PropTypes from 'prop-types'; // Import PropTypes
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Heading from './Heading'; // Make sure to import Heading component
import Button from './Button'; // Make sure to import Button component
//import styled from 'styled-components';

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;

function ErrorFallback({ error, resetError }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as="h1">Something went wrong</Heading>
          <p>{error.message}</p>
          <Button size="large" onClick={resetError}>
            Try Again
          </Button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

// Add PropTypes validation for the props
ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired, // Ensure error.message is a string
  }),
  resetError: PropTypes.func, // Ensure resetError is a function
};

export default ErrorFallback;
