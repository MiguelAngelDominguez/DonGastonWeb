import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { CssVarsProvider } from '@mui/joy/styles';

import { visuallyHidden } from '@mui/utils';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/X';

import SitemarkIcon from './SitemarkIcon';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" mt={1}>
			{'Copyright © '}
			<Link href="https://mui.com/">Sitemark&nbsp;</Link>
			{new Date().getFullYear()}
		</Typography>
	);
}

export default function Footer() {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: { xs: 4, sm: 8 },
				py: { xs: 8, sm: 10 },
				textAlign: { sm: 'center', md: 'left' },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
					width: '100%',
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 4,
						minWidth: { xs: '100%', sm: '60%' },
					}}
				>
					<Box sx={{ width: { xs: '100%', sm: '60%' } }}>
						<SitemarkIcon />
						<Typography variant="body2" fontWeight={600} gutterBottom sx={{ mt: 2 }}>
							Regístrate para recibir noticias
						</Typography>
						<Typography variant="body2" color="text.secondary" mb={2}>
							Ingresa tu correo para recibir noticias y actualizaciones.
						</Typography>
						<Stack direction="row" spacing={1} useFlexGap>
							<InputLabel htmlFor="email-newsletter" sx={visuallyHidden}>
								Correo electrónico
							</InputLabel>
							<TextField
								id="email-newsletter"
								hiddenLabel
								size="small"
								variant="outlined"
								fullWidth
								aria-label="Ingresa tu correo electrónico"
								placeholder="Tu correo electrónico"
								inputProps={{
									autoComplete: 'off',
									'aria-label': 'Ingrese su correo electrónico',
								}}
							/>
							<Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
								Enviar
							</Button>
						</Stack>
					</Box>
				</Box>
				<Box
					sx={{
						display: { xs: 'none', sm: 'flex' },
						flexDirection: 'column',
						gap: 1,
					}}
				>
					<Typography variant="body2" fontWeight="medium">
						Inicio
					</Typography>
					<Link color="text.secondary" variant="body2" href="#">
						¿Quiénes somos?
					</Link>
					<Link color="text.secondary" variant="body2" href="#">
						Nuestros Logros
					</Link>
					<Link color="text.secondary" variant="body2" href="#">
						Nuestros Productos
					</Link>
				</Box>
				<Box
					sx={{
						display: { xs: 'none', sm: 'flex' },
						flexDirection: 'column',
						gap: 1,
					}}
				>
					<Typography variant="body2" fontWeight="medium">
						Compañía
					</Typography>
					<Link color="text.secondary" variant="body2" href="#">
						Sobre nosotros
					</Link>
					<Link color="text.secondary" variant="body2" href="#">
						Contacto
					</Link>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					pt: { xs: 4, sm: 8 },
					width: '100%',
					borderTop: '1px solid',
					borderColor: 'divider',
				}}
			>
				<div>
					<Link color="text.secondary" variant="body2" href="#">
						Politica de Privacidad
					</Link>
					<Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
						&nbsp;•&nbsp;
					</Typography>
					<Link color="text.secondary" variant="body2" href="#">
						terminos y condiciones
					</Link>
					{/* <Copyright /> */}
				</div>
				<Stack
					direction="row"
					justifyContent="left"
					spacing={1}
					useFlexGap
					sx={{
						color: 'text.secondary',
					}}
				>
					<IconButton
						color="inherit"
						href="https://www.facebook.com/DonGastonsac"
						aria-label="Facebook"
						sx={{ alignSelf: 'center' }}
					>
						<FacebookIcon />
					</IconButton>
					<IconButton
						color="inherit"
						href="https://www.instagram.com/dongastonsac/"
						aria-label="Instagram"
						sx={{ alignSelf: 'center' }}
					>
						<InstagramIcon />
					</IconButton>
				</Stack>
			</Box>
		</Container>
	);
}
