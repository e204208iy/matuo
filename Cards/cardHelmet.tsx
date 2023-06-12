import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from "react-router-dom";

export default function CardHelmet() {
    const navigate = useNavigate()
    return (
        <Card sx={{boxShadow:2}}>
            <CardActionArea onClick={() => navigate('/helmetPage')}>
            <CardHeader
                title="ヘルメット"
            />
            <CardMedia
                component="img"
                
                image="./helmet-safety-solid.svg"
                title="green iguana"
            />
            </CardActionArea>
        </Card>
    );
  }