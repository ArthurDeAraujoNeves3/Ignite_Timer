import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Button color="secondary"/>
      <Button color="primary"/>
      <Button color="danger"/>
      <Button />
    </ThemeProvider>
  );
};
