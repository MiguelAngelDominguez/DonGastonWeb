import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Container from '@mui/material/Container';

import getLPTheme from '../components/getLPTheme';

import AppAppBar from '../components/AppAppBar';
import ProductGallery from '../components/ProductGallery';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

interface ToggleCustomThemeProps {
	showCustomTheme: Boolean;
	toggleCustomTheme: () => void;
}

function ToggleCustomTheme({
	showCustomTheme,
	toggleCustomTheme,
}: ToggleCustomThemeProps) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100dvw',
				position: 'fixed',
				bottom: 24,
			}}
		>
			<ToggleButtonGroup
				color="primary"
				exclusive
				value={showCustomTheme}
				onChange={toggleCustomTheme}
				aria-label="Toggle design language"
				sx={{
					backgroundColor: 'background.default',
					'& .Mui-selected': {
						pointerEvents: 'none',
					},
				}}
			>
				<ToggleButton value>
					<AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
					Custom theme
				</ToggleButton>
				<ToggleButton value={false}>Material Design 2</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
}

export default function SalesPage() {
	const [mode, setMode] = React.useState<PaletteMode>('light');
	const [showCustomTheme, setShowCustomTheme] = React.useState(true);
	const LPtheme = createTheme(getLPTheme(mode));
	const defaultTheme = createTheme({ palette: { mode } });

	const toggleColorMode = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	const toggleCustomTheme = () => {
		setShowCustomTheme((prev) => !prev);
	};

	return (
		<ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
			<CssBaseline />
			<AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
			<Hero
				title={["Nuestros", "Productos"]}
				paragraph="Descubre el mejor café en 'Don Gastón', originario de Perú, donde la calidad y el sabor excepcional se encuentran en cada taza. Ven y disfruta de lo auténtico."
				seeEmail={false}
				srcImg=""
			/>
			<ProductGallery />
			<Footer />
			{/* <Container
				id="OurAchievements"
				sx={{
					pt: { xs: 4, sm: 12 },
					pb: { xs: 8, sm: 16 },
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: { xs: 3, sm: 6 },
				}}
			>
				<Box sx={{ bgcolor: 'background.default' }}>
					<ProductGallery />
				</Box>
			</Container> */}

			{/* <ToggleCustomTheme
				showCustomTheme={showCustomTheme}
				toggleCustomTheme={toggleCustomTheme}
			/> */}
		</ThemeProvider>
	);
}