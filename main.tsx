import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardStepLadder from './Cards/cardStepLadder';
import CardHelmet from './Cards/cardHelmet';
import CardClothes from './Cards/cardClothes';
import CardDummy from './Cards/cardDummy';

export default function Main() {
    return (
        <Container>
            <Grid container spacing={4} sx={{ display: 'flex' }}>
                <Grid item xs={6}>
                    <CardStepLadder />
                </Grid>
                <Grid item xs={6}>
                    <CardHelmet />
                </Grid>
                <Grid item xs={6}>
                    <CardClothes />
                </Grid>
                <Grid item xs={6}>
                    <CardDummy />
                </Grid>
                <Grid item xs={6}>
                    <CardDummy />
                </Grid>
                <Grid item xs={6}>
                    <CardDummy />
                </Grid>
            </Grid>
        </Container>
    );
  }