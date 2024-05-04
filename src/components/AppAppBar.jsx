import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ToggleColorMode from './ToggleColorMode';

import Sitemark from './SitemarkIcon';

function AppAppBar({ mode, toggleColorMode }) {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const scrollToSection = (sectionId) => {
		const sectionElement = document.getElementById(sectionId);
		const offset = 128;
		if (sectionElement) {
			const targetScroll = sectionElement.offsetTop - offset;
			sectionElement.scrollIntoView({ behavior: 'smooth' });
			window.scrollTo({
				top: targetScroll,
				behavior: 'smooth',
			});
			setOpen(false);
		}
	};

	return (
		<AppBar
			position="fixed"
			sx={{
				boxShadow: 0,
				bgcolor: 'transparent',
				backgroundImage: 'none',
				mt: 2,
			}}
		>
			<Container maxWidth="lg">
				<Toolbar
					variant="regular"
					sx={(theme) => ({
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexShrink: 0,
						borderRadius: '999px',
						bgcolor:
							theme.palette.mode === 'light'
								? 'hsla(220, 60%, 99%, 0.6)'
								: 'hsla(220, 0%, 0%, 0.7)',
						backdropFilter: 'blur(24px)',
						maxHeight: 40,
						border: '1px solid',
						borderColor: 'divider',
						boxShadow:
							theme.palette.mode === 'light'
								? '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)'
								: '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)',
					})}
				>
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							alignItems: 'center',
							px: 0,
						}}
					>

						<Sitemark pref_nameEnterprise='Don' suf_nameEnterprise='Gaston' />
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<Button
								variant="text"
								color="info"
								size="small"
								onClick={() => scrollToSection('features')}
							>
								Inicio
							</Button>
							<Button
								variant="text"
								color="info"
								size="small"
								onClick={() => scrollToSection('testimonials')}
							>
								¿Quienes somos?
							</Button>
							<Button
								variant="text"
								color="info"
								size="small"
								onClick={() => scrollToSection('highlights')}
							>
								Nuestros Logros
							</Button>
							{/* <Button
								variant="text"
								color="info"
								size="small"
								onClick={() => scrollToSection('pricing')}
							>
								Redes Sociales
							</Button> */}
							<Button
								variant="text"
								color="info"
								size="small"
								onClick={() => scrollToSection('faq')}
								sx={{ minWidth: 0 }}
							>
								Nuestros Productos
							</Button>
						</Box>
					</Box>
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							gap: 0.5,
							alignItems: 'center',
						}}
					>
						<ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
						{/* <Button color="primary" variant="text" size="small">
							Sign in
						</Button>
						<Button color="primary" variant="contained" size="small">
							Sign up
						</Button> */}
					</Box>
					<Box sx={{ display: { sm: 'flex', md: 'none' } }}>
						<IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
							<MenuIcon />
						</IconButton>
						<Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
							<Box
								sx={{
									p: 2,
									backgroundColor: 'background.default',
								}}
							>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}
								>
									<ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
									<IconButton onClick={toggleDrawer(false)}>
										<CloseRoundedIcon />
									</IconButton>
								</Box>
								<Divider sx={{ my: 3 }} />
								<MenuItem onClick={() => scrollToSection('features')}>
									Inicio
								</MenuItem>
								<MenuItem onClick={() => scrollToSection('testimonials')}>
									¿Quienes somos?
								</MenuItem>
								<MenuItem onClick={() => scrollToSection('highlights')}>
									Nuestros Logros
								</MenuItem>
								{/* <MenuItem onClick={() => scrollToSection('pricing')}>
									Redes Sociales
								</MenuItem> */}
								<MenuItem onClick={() => scrollToSection('faq')}>
									Nuestros Logros
								</MenuItem>
								{/* <MenuItem>
									<Button color="primary" variant="contained" fullWidth>
										Sign up
									</Button>
								</MenuItem>
								<MenuItem>
									<Button color="primary" variant="outlined" fullWidth>
										Sign in
									</Button>
								</MenuItem> */}
							</Box>
						</Drawer>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

AppAppBar.propTypes = {
	mode: PropTypes.oneOf(['dark', 'light']).isRequired,
	toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
