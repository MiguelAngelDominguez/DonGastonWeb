import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { CssVarsProvider } from '@mui/joy/styles';

export default function ProductCard(
    {
        nameProduct,
        price,
        content_measure,
        stock,
        urlImage
    }: {
        nameProduct: string
        price: number,
        content_measure: string,
        stock: number,
        urlImage: string
    }
) {
    return (
        <CssVarsProvider>
            <Card sx={{ minHeight: 400, width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
                <CardOverflow>
                    <AspectRatio minHeight={300} sx={{ minWidth: 200 }} >
                        <img
                            src={urlImage}
                            srcSet={urlImage}
                            loading="lazy"
                            alt=""
                            className=''
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="body-xs">Edición Especial</Typography>
                    <Link
                        href="#product-card"
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutwardIcon />}
                    >
                        {nameProduct}
                    </Link>

                    <Typography
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: 'xl' }}
                        endDecorator={
                            <Chip component="span" size="sm" variant="soft" color="success">
                                {content_measure}
                            </Chip>
                        }
                    >
                        S/. {price.toFixed(2)}
                    </Typography>
                    <Typography level="body-sm">
                        (¡Solo quedan <b>{
                            stock > 0 ? stock : 'Agotado'
                        }</b> en Stock!)
                    </Typography>
                </CardContent>
                <CardOverflow>
                    <Button variant="solid" color='success' size="lg">
                        Comprar Producto&nbsp;
                        <WhatsAppIcon />
                    </Button>
                </CardOverflow>
            </Card>
        </CssVarsProvider>
    );
}