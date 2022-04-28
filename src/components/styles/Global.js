import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {
  width: 100vw;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.App {
  width: 95vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}
`;

export default GlobalStyles;