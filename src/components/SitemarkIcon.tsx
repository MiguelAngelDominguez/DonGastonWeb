import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import '../styles/SitemarkIcon.css';

export default function SitemarkIcon({
	tyLogo = false,
	imgsrc = "",
	pref_nameEnterprise = "",
	suf_nameEnterprise = ""
}) {
	const theme = useTheme();

	return (
		<>
			{tyLogo ? (
				<img src={imgsrc} alt="Logo de la empresa" className='logoIcon' />
			) : (
				<div className="logoText" style={{ color: theme.palette.text.primary }}>
					{pref_nameEnterprise}{" "}
					<span className="logoText_effect" style={{ color: theme.palette.primary.main }}>
						{suf_nameEnterprise}
					</span>
				</div>
			)}
		</>
	);
}