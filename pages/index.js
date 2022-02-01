import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Button } from '@mui/material';


import Layout from '../components/Layout';
import data from '../utils/data';
import useStyle from '../utils/styles';


export default function Home() {
  const classes = useStyle()
  return (
    <Layout>
      <h1>Product </h1>
      <Grid container spacing={3}>
        {data.products.map(pd => (
          <Grid item md={4} key={pd.name}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={pd.image} title={pd.name}></CardMedia>
                <CardContent>
                  <Typography>
                    {pd.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography>
                  $ {pd.price}
                </Typography>
                <Button size='small' className={classes.cardButton}>Add To Card</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout >
  )
}
