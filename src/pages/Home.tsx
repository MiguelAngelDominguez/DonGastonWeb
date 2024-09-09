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

export default function Home() {
	const [mode, setMode] = React.useState<PaletteMode>('light');
	const [showCustomTheme, setShowCustomTheme] = React.useState(true);
	const LPtheme = createTheme(getLPTheme(mode));
	const defaultTheme = createTheme({ palette: { mode } });

	const toggleColorMode = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
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
				{/* <Divider />
				<LogoCollection /> */}
				<Divider />
				<AboutUs />
				<Divider />
				<OurAchievements />
				<Divider />
				<HowProduceCoffe />
				<div id='products'>
					<Hero
						title={["Nuestros", "Productos"]}
						paragraph="Descubre el mejor café en 'Don Gastón', originario de Perú, donde la calidad y el sabor excepcional se encuentran en cada taza. Ven y disfruta de lo auténtico."
						seeEmail={false}
						srcImg=""
					/>
				</div>
				<ProductGallery />
				<Footer />
			</Box>
			{/* <ToggleCustomTheme
				showCustomTheme={showCustomTheme}
				toggleCustomTheme={toggleCustomTheme}
			/> */}
		</ThemeProvider>
	);
}
