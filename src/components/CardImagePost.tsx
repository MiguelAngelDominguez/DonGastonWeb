import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import { CssVarsProvider } from '@mui/joy/styles';

export default function CardImagePost(
    {
        srcImg,
        title,
        strUbication
    }:{
        srcImg: string,
        title: string,
        strUbication: string
    }
) {
    return (
        <CssVarsProvider>
            <Card sx={{ minHeight: '400px', width: 350, margin: '0 auto' }} >
                <CardCover>
                    <img
                        src={srcImg}
                        srcSet={srcImg}
                        loading="lazy"
                        alt=""
                    />
                </CardCover>
                <CardCover
                    sx={{
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                    }}
                />
                <CardContent sx={{ justifyContent: 'flex-end' }}>
                    <Typography level="title-lg" textColor="#fff" textAlign={'left'}>
                        {title}
                    </Typography>
                    <Typography
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.300"
                    >
                        {strUbication}
                    </Typography>
                </CardContent>
            </Card>
        </CssVarsProvider>

    );
}