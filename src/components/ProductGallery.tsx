import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ProductCard from './ProductCard';

import { createClient } from '@supabase/supabase-js'
import apiSlice from '../api/apiSlice';
import getLPTheme from './getLPTheme';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : theme.palette.background.paper,
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...(theme.palette.mode === 'light' && {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        border: `1px solid transparent`,
        boxShadow: '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px rgba(0, 0, 0, 0.1)',
    }),
}));

interface Product {
    id: number;
    name: string;
    price: number;
    content_measure: string;
    stock: number;
    description: string;
    image: string;
}

export default function ProductGallery() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const fetchedProducts = await apiSlice();
                if (fetchedProducts) {
                    setProducts(fetchedProducts);
                } else {
                    throw new Error('No products returned');
                }
            } catch (err) {
                setError('Error al cargar productos');
                console.error(err);
            }
        }

        fetchProducts();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!products.length) return <div>Cargando...</div>;

    const theme = createTheme(getLPTheme('light'));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                id=""
                sx={{
                    pt: { xs: 4, sm: 12 },
                    pb: { xs: 8, sm: 16 },
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} justifyContent={'center'}>
                    {
                        products.map((product: any) => {
                            return (
                                <Grid>
                                    <Item onClick={() => navigate(`/product/${product.id}`)}>
                                        <ProductCard
                                            nameProduct={product.name}
                                            price={product.price}
                                            content_measure={product.content_measure}
                                            stock={product.stock}
                                            urlImage={product.image}
                                        />
                                    </Item>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Container>
        </ThemeProvider> 
    );
}