import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

export default function CardDummy() {
    const navigate = useNavigate()
    return (
        <Card sx={{boxShadow:2}}>
            <CardActionArea onClick={() => navigate('/stepladderPage')}>
            <CardHeader
                title="Dummy"
            />
            <Avatar　sx={{ width: 100, height: 100 }}>
                D
            </Avatar>
            </CardActionArea>
        </Card>
    );
  }