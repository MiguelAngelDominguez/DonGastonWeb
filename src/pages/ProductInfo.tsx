import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PaletteMode, CssBaseline, Box, Container, Grid, Typography, Button, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Divider from '@mui/material/Divider';
import getLPTheme from '../components/getLPTheme';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import apiSlice from '../api/apiSlice';
import Footer from '../components/Footer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ImageCarrusel from '../components/ImageCarrusel';

interface Product {
    id: number;
    name: string;
    price: number;
    content_measure: string;
    stock: number;
    description: string;
    image: string;
}

export default function ProductInfo() {
    const { id } = useParams<{ id: string }>();
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const LPtheme = createTheme(getLPTheme(mode));
    const defaultTheme = createTheme({ palette: { mode } });

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const toggleCustomTheme = () => {
        setShowCustomTheme((prev) => !prev);
    };

    useEffect(() => {
        async function fetchProducts() {
            try {
                const fetchedProducts = await apiSlice();
                if (fetchedProducts && id) {
                    const selectedProduct = fetchedProducts.find((p: Product) => p.id === parseInt(id));
                    setProduct(selectedProduct);
                } else {
                    throw new Error('No products returned');
                }
            } catch (err) {
                setError('Error al cargar productos');
                console.error(err);
            }
        }

        fetchProducts();
    }, [id]);

    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Cargando...</div>;

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(event.target.value));
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '51957595672'; // Reemplaza con el número de teléfono deseado
        const message = `Hola, estoy interesado en el producto ${product?.name}.\nPrecio Unitario: S/. ${product?.price}\nCantidad: ${quantity}\nTotal: S/. ${(product?.price * quantity * (1 - discount)).toFixed(2)}`;
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    let discount = 0;
    if (quantity >= 12) {
        discount = 0.05;
    } else if (quantity >= 6) {
        discount = 0.02;
    }
    const totalPrice = (product.price * quantity * (1 - discount)).toFixed(2);

    return (
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            <Container sx={
                {
                    mt: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }
            }>
                <div>
                    <h2>
                        Realizar consulta del producto
                    </h2>
                </div>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <ImageCarrusel images={[product.image, product.image]} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        textAlign: 'start',
                    }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Cantidad: {product.content_measure}
                        </Typography>
                        <Typography variant="h6" component="p">
                            Pre. Unidad: S/. {product.price}
                        </Typography>
                        <Grid container sx={{ mt: 2 }} alignItems="center" spacing={1}>
                            <Grid item xs={12} sm="auto" sx={{ mr: 2 }}>
                                <TextField
                                    label="Cantidad"
                                    type="number"
                                    InputProps={{ inputProps: { min: 1 } }}
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    sx={{ width: '100px' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm="auto" sx={{ mr: 2 }}>
                                <Typography variant="h5" component="p">
                                    Total: S/. {totalPrice}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm="auto">
                                <Typography variant="body1" component="p">
                                    {discount > 0 ? (
                                        `Descuento del ${discount * 100}%`
                                    ) : (
                                        <Typography variant="body2" sx={{ color: 'grey.500', fontWeight: 'light' }}>
                                            Descuento a partir de 6 unidades
                                        </Typography>
                                    )}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <Button variant="contained" color="success" sx={
                                {
                                    backgroundColor: '#1f7a1f', // Color de fondo de WhatsApp
                                    color: 'white', // Color de texto blanco
                                    '&:hover': {
                                        backgroundColor: '#136c13', // Color más oscuro al pasar el mouse
                                    },
                                    
                                }
                            }
                            onClick={handleWhatsAppClick}>
                                <span style={
                                    {
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'end',
                                    }
                                }>Pedir Producto&nbsp;</span>
                                <WhatsAppIcon />
                            </Button>
                            <Typography variant="body1" component="p" sx={{ ml: 2 }}>
                                {product.stock} + unidades disponibles
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="h5" gutterBottom>
                                Descripción del producto
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {product.description}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}