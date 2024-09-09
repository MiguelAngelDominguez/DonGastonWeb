import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/system';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import CardImagePost from './CardImagePost';

const userOurAchievements = [
	{
		srcImg: 'https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/usaDg1.png',
		title: 'Expo Specialty Coffee',
		strUbication: 'Chicago, USA',
	},
	{
		srcImg: 'https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/usaDg2.png',
		title: 'Rumbo al SCA en EEUU',
		strUbication: 'Huanuco, Perú',
	},
];

const whiteLogos = [
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
	'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
	width: '64px',
	opacity: 0.3,
};

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function OurAchievements() {
	const theme = useTheme();
	const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

	return (
		<Container
			id="achievements"
			sx={{
				pt: { xs: 4, sm: 12 },
				pb: { xs: 8, sm: 16 },
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: { xs: 3, sm: 6 },
			}}
		>
			<Box
				sx={{
					width: { sm: '100%', md: '60%' },
					textAlign: 'center',
				}}
			>
				<Typography component="h2" variant="h4" color="text.primary">
					Nuestros Logros
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Hemos logrado una expansión significativa, consolidando nuestra presencia en mercados nacionales e internacionales con productos excepcionales.
				</Typography>
			</Box>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={4} columns={{ xs: 2, sm: 8, md: 12 }} justifyContent="center">
					{/* {Array.from(Array(2)).map((_, index) => (
						<Grid xs={6} key={index}>
							<CardImagePost />
						</Grid>
					))} */}
					{
						Array.from(Array(userOurAchievements.length)).map((_, index) => (
							<Grid xs={6} key={index}>
								<CardImagePost 
									srcImg={userOurAchievements[index].srcImg}
									title={userOurAchievements[index].title}
									strUbication={userOurAchievements[index].strUbication}
								/>
							</Grid>
						))
					}
				</Grid>
			</Box>
		</Container>
	);
}
