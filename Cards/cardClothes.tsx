import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
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
            </Box>
            <CardMedia
                component="img"
                image="./shirt-solid.svg"
                title="green iguana"
            />
            </CardActionArea>
        </Card>
    );
  }