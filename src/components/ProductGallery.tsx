import * as React from 'react';
import { useEffect, useState } from 'react';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import ProductCard from './ProductCard';

import { createClient } from '@supabase/supabase-js'
import apiSlice from '../api/apiSlice';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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

    // const data = apiSlice();
    // Columnas de la tabla products:
    // id, created_at, name, price, content_measure, stock, description, image

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {/* {Array.from(Array(12)).map((_, index) => (
                    <Grid xs={2} sm={4} md={4} key={index}>
                        <Item>
                            <ProductCard />
                        </Item>
                    </Grid>
                ))} */}
                {
                    products.map((product: any) => {
                        return (
                            <Grid xs={2} sm={4} md={4}>
                                <Item>
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
        </Box>
    );
}