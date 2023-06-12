import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from "react-router-dom";

export default function CardStepLadder() {
    const navigate = useNavigate()
    return (
        <Card sx={{boxShadow:2,maxHeight:220}}>
            <CardActionArea onClick={() => navigate('/stepladderPage')}>
            <CardHeader
                title="脚立"
            />
            <CardMedia
                component="img"
                image="./bars-solid.svg"
                alt="きゃたつ"
            />
            </CardActionArea>
        </Card>
    );
  }
