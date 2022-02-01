import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import useStyle from '../../utils/styles';
import NextLink from 'next/link'
import Link from 'next/link'
import { Grid, List, ListItem, Typography } from '@material-ui/core';
import Image from 'next/image';


const productScreen = () => {
    const router = useRouter()
    const { slug } = router.query
    const classes = useStyle()
    const product = data.products.find(pd => pd.slug === slug)
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <Layout title={product.name}>
            <div className={classes.section}>
                <NextLink href="/" passHref>
                    <Link>

                        Back To Product

                    </Link>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image src={product.image} alt={product.name} width={640} height={640} layout='responsive' />

                </Grid>
                <Grid item md={3} xs={12}>

                    <List>
                        <ListItem>

                            <Typography>
                                Category: {product.category}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Category: {product.brand}
                            </Typography>

                        </ListItem>
                        <ListItem>
                            <Typography >
                                Rating: {product.rating}  star({product.numReviews} reviews)
                            </Typography>
                        </ListItem>
                        <ListItem>

                            <Typography>
                                Discription:
                                {product.description}
                            </Typography>


                        </ListItem>

                    </List>

                </Grid>
            </Grid>
        </Layout>
    );
};

export default productScreen;