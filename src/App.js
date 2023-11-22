import Cards from "./components/Cards";
import { Box } from "@mui/material";

function App() {

  return (
    <div className='App'>
      <Box sx={{display: 'flex'}}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Box>
    </div>
  );
}

export default App;
