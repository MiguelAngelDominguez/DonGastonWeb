import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

import AppAppBar from '../components/AppAppBar';
import getLPTheme from '../components/getLPTheme';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurAchievements from '../components/OurAchievements';
import ProductGallery from '../components/ProductGallery';
import HowProduceCoffe from '../components/HowProduceCoffe';
import Footer from '../components/Footer';
import LogoCollection from '../components/LogoCollection';

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

export default function Home() {
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
				title={["Don", " Gaston"]}
				paragraph='Descubre el mejor café en Don Gastón, proveniente de las alturas de Perú. Un sabor único y auténtico que solo un verdadero café de altura puede ofrecer. ¡Visítanos y disfruta de la excelencia en cada taza!'
				seeEmail={true}
				srcImg='https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/logos/logoDonGaston.png'
			/>
			<Box sx={{ bgcolor: 'background.default' }}>
				<Divider />
				<LogoCollection />
				<Divider />
				<AboutUs />
				<Divider />
				<OurAchievements />
				<Divider />
				<HowProduceCoffe />
				<Hero
					title={["Nuestros", "Productos"]}
					paragraph="Descubre el mejor café en 'Don Gastón', originario de Perú, donde la calidad y el sabor excepcional se encuentran en cada taza. Ven y disfruta de lo auténtico."
					seeEmail={false}
					srcImg=""
				/>
				<ProductGallery />
				<Footer />
				{/* <LogoCollection />
				<Features />
				<Divider />
				<Testimonials />
				<Divider />
				<Highlights />
				<Divider />
				<Pricing />
				<Divider />
				<FAQ />
				<Divider />
				<Footer /> */}
			</Box>
			{/* <ToggleCustomTheme
				showCustomTheme={showCustomTheme}
				toggleCustomTheme={toggleCustomTheme}
			/> */}
		</ThemeProvider>
	);
}
