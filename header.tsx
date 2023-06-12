import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1,pb:1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1,letterSpacing: 6}} onClick={() => navigate("./")}>
            松尾建設 SITE
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}