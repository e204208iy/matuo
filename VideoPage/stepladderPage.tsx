import Typography from '@mui/material/Typography';
import LadderVideo from "../VideoComponent/ladderVideo";
import Container from '@mui/material/Container';

export default function StepladderPage() {
    return (
      <Container>
         <Typography variant="h6">
        脚立の動画です。
      </Typography>
      <LadderVideo />
      </Container>
        );
  }