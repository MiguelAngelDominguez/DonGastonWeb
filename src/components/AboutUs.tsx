import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Chip as MuiChip } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const items = [
	{
		icon: <TrendingUpIcon />,
		title: 'Nuestra Misión',
		description:
			'Empoderar a las comunidades mediante productos naturales que promueven la salud y la sostenibilidad.',
		imageLight: 'url("https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/twoCoffeDg.png")',
		imageDark: 'url("https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/twoCoffeDg.png")',
	},
	{
		icon: <EmojiPeopleIcon />,
		title: 'Nuestra Visión',
		description:
			'Ser líderes en sostenibilidad, inspirando un cambio global hacia prácticas de consumo responsable.',
		imageLight: 'url("https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/expoferiaDg.png")',
		imageDark: 'url("https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/expoferiaDg.png")',
	},
	{
		icon: <EmojiObjectsIcon />,
		title: 'Nuestros Valores',
		description:
			'Integridad, innovación, y respeto por la naturaleza guían cada decisión y producto que ofrecemos.',
		imageLight: 'url("https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/expoferiaDg2.png")',
		imageDark: 'url("https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/expoferiaDg2.png")',
	},
];

interface ChipProps {
	selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme, selected }) => ({
	...(selected && {
		borderColor:
			theme.palette.mode === 'light'
				? theme.palette.primary.light
				: theme.palette.primary.dark,
		background:
			'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
		color: 'hsl(0, 0%, 100%)',
		'& .MuiChip-label': {
			color: 'hsl(0, 0%, 100%)',
		},
	}),
}));

export default function AboutUs() {
	const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

	const handleItemClick = (index: number) => {
		setSelectedItemIndex(index);
	};

	const selectedFeature = items[selectedItemIndex];

	return (
		<Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
			<Grid container spacing={6}>
				<Grid item xs={12} md={6}>
					<div>
						<Typography component="h2" variant="h4" color="text.primary">
							¿Quienes Somos?
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ mb: { xs: 2, sm: 4 } }}
							textAlign={'left'}
						>
							Somos una empresa Huanuqueña dedicada a productos naturales desde hace 40 años.
							En agosto de 2017, comenzamos a industrializar cultivos, destacando nuestro Café Don Gaston,
							un homenaje a Don Gastón Tello Tello y su legado.
						</Typography>
					</div>
					<Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
						{items.map(({ title }, index) => (
							<Chip
								key={index}
								label={title}
								onClick={() => handleItemClick(index)}
								selected={selectedItemIndex === index}
							/>
						))}
					</Grid>
					<Card
						variant="outlined"
						sx={{
							display: { xs: 'auto', sm: 'none' },
							mt: 4,
						}}
					>
						<Box
							sx={{
								backgroundImage: (theme) =>
									theme.palette.mode === 'light'
										? items[selectedItemIndex].imageLight
										: items[selectedItemIndex].imageDark,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								minHeight: 280,
							}}
						/>
						<Box sx={{ px: 2, pb: 2 }}>
							<Typography color="text.primary" fontWeight="medium" gutterBottom>
								{selectedFeature.title}
							</Typography>
							<Typography color="text.secondary" variant="body2" sx={{ mb: 1.5 }}>
								{selectedFeature.description}
							</Typography>
							<Link
								color="primary"
								variant="body2"
								fontWeight="bold"
								sx={{
									display: 'inline-flex',
									alignItems: 'center',
									'& > svg': { transition: '0.2s' },
									'&:hover > svg': { transform: 'translateX(2px)' },
								}}
							>
								<span>Ver mas</span>
								<ChevronRightRoundedIcon
									fontSize="small"
									sx={{ mt: '1px', ml: '2px' }}
								/>
							</Link>
						</Box>
					</Card>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="flex-start"
						spacing={2}
						useFlexGap
						sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
					>
						{items.map(({ icon, title, description }, index) => (
							<Card
								key={index}
								component={Button}
								onClick={() => handleItemClick(index)}
								sx={(theme) => ({
									p: 3,
									height: 'fit-content',
									width: '100%',
									background: 'none',
									...(selectedItemIndex === index && {
										backgroundColor: 'action.selected',
										borderColor:
											theme.palette.mode === 'light'
												? 'primary.light'
												: 'primary.dark',
									}),
									'&:hover': {
										background:
											theme.palette.mode === 'light'
												? 'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)'
												: 'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
										borderColor:
											theme.palette.mode === 'light'
												? 'primary.light'
												: 'primary.dark',
										boxShadow:
											theme.palette.mode === 'light'
												? '0px 2px 8px hsla(0, 0%, 0%, 0.1)'
												: '0px 1px 8px hsla(210, 100%, 25%, 0.5) ',
									},
								})}
							>
								<Box
									sx={{
										width: '100%',
										display: 'flex',
										textAlign: 'left',
										flexDirection: { xs: 'column', md: 'row' },
										alignItems: { md: 'center' },
										gap: 2.5,
									}}
								>
									<Box
										sx={(theme) => ({
											color:
												theme.palette.mode === 'light' ? 'grey.400' : 'grey.600',
											...(selectedItemIndex === index && {
												color: 'primary.main',
											}),
										})}
									>
										{icon}
									</Box>
									<div>
										<Typography
											color="text.primary"
											fontWeight="medium"
											gutterBottom
										>
											{title}
										</Typography>
										<Typography
											color="text.secondary"
											variant="body2"
											sx={{ mb: 1.5 }}
										>
											{description}
										</Typography>
										<Link
											color="primary"
											variant="body2"
											fontWeight="bold"
											sx={{
												display: 'inline-flex',
												alignItems: 'center',
												'& > svg': { transition: '0.2s' },
												'&:hover > svg': { transform: 'translateX(2px)' },
											}}
											onClick={(event) => {
												event.stopPropagation();
											}}
										>
											<span>Ver mas</span>
											<ChevronRightRoundedIcon
												fontSize="small"
												sx={{ mt: '1px', ml: '2px' }}
											/>
										</Link>
									</div>
								</Box>
							</Card>
						))}
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
				>
					<Card
						variant="outlined"
						sx={{
							height: '100%',
							width: '100%',
							display: { xs: 'none', sm: 'flex' },
							pointerEvents: 'none',
						}}
					>
						<Box
							sx={{
								m: 'auto',
								width: 552,
								height: 670,
								backgroundImage: (theme) =>
									theme.palette.mode === 'light'
										? items[selectedItemIndex].imageLight
										: items[selectedItemIndex].imageDark,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								minHeight: 280,
							}}
						/>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}
