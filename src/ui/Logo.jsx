import styled from "styled-components";
//import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  //const { isDarkMode } = useDarkMode();

  //const src = isDarkMode ? "/logo-dark.png" : "logo-light.png"; 
  
  return (
    <StyledLogo>
      <Img style={{ border: "3px solid white", borderRadius: "200px", width: "100px", height: "90px" }} src="treeunsplash.jpg" alt="Logo" />

    </StyledLogo>
  );
}

export default Logo;
