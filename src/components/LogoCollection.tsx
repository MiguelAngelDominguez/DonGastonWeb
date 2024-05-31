import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
  'https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/logos/enterprise/grde.png',
  'https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/logos/enterprise/unheval.png',
  'https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/logos/enterprise/industrial.png',
  'https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/logos/enterprise/sistemas.png',
];

const darkLogos = [
  'https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/logos/enterprise/grde_color.png',
  'https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/logos/enterprise/unheval_color.png',
  'https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/logos/enterprise/industrial_color.png',
  'https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/logos/enterprise/sistemas_color.png',
];

const logoStyle = {
  height: '90px',
  margin: '0 30px',
  // opacity: 0.7,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Estamos trabajando con
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5}}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
