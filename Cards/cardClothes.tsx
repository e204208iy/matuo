import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from "react-router-dom";

export default function CardClothes() {
    const navigate = useNavigate()
    return (
        <Card sx={{boxShadow:2}}>
            <CardActionArea onClick={() => navigate('/clothesPage')}>
            <Box>
            <CardHeader
                title="作業服"
            />
            <Avatar aria-label="recipe" src="./cloth.png" sx={{ width: 100, height: 100 }}>
            </Avatar>
            </Box>
            </CardActionArea>
        </Card>
    );
  }