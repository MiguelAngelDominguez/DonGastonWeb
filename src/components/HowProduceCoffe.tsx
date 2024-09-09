import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HowProduceCoffe() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Container
            id="elaborate"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
                backgroundImage: 'url(https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fonts/font_coffe_1.jpeg)',
                backgroundSize: 'cover',
            }}
        >
            <Typography
                component="h2"
                variant="h4"
                color="text.primary"
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                ¿Como elaboramos el café Don Gaston?
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            ¿Cómo selecciona la empresa Don Gastón los granos de café para su producción?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Container
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                gap: 4,
                                alignItems: 'center',
                            }}
                        >
                            <Typography>
                                En Don Gastón, seleccionamos cuidadosamente los granos de café provenientes de nuestras propias plantaciones en Huánuco. Nuestros expertos agricultores cosechan a mano los granos maduros para asegurar la mejor calidad. Luego, los granos son sometidos a un riguroso proceso de selección y clasificación para garantizar que solo los mejores sean utilizados en nuestra producción.
                            </Typography>
                            <Container
                                sx={
                                    {
                                        width: '15rem',
                                        height: '15rem',
                                        backgroundImage: 'url(https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/fot_camp_1.jpg)',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        borderRadius: '12px',
                                    }
                                }
                            >
                            </Container>
                        </Container>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            ¿Cuál es el proceso de tostado del café Don Gastón?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Container
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                gap: 4,
                                alignItems: 'center',
                            }}
                        >
                            <Typography>
                                El proceso de tostado del café Don Gastón se realiza en nuestras instalaciones industriales con tecnología de vanguardia. Utilizamos un tostador de tambor que permite un control preciso de la temperatura y el tiempo de tostado. Esto nos permite resaltar los sabores y aromas únicos de nuestro café, creando un perfil de sabor balanceado y consistente que nuestros clientes disfrutan.
                            </Typography>
                            <Container
                                sx={
                                    {
                                        width: '15rem',
                                        height: '15rem',
                                        backgroundImage: 'url(https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/fot_camp_2.jpg)',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        borderRadius: '12px',
                                    }
                                }
                            >
                            </Container>
                        </Container>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            ¿Qué métodos de procesamiento utilizan para el café Don Gastón?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Container
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                gap: 4,
                                alignItems: 'center',
                            }}
                        >
                            <Typography>
                                En Don Gastón, utilizamos principalmente dos métodos de procesamiento: el método lavado y el método natural. En el método lavado, los granos de café se fermentan y lavan para remover la pulpa antes de secarlos al sol. En el método natural, los granos se secan con la pulpa aún adherida, lo que les da un sabor más afrutado. Ambos métodos permiten resaltar las características únicas de nuestros granos de café.
                            </Typography>
                            <Container
                                sx={
                                    {
                                        width: '15rem',
                                        height: '15rem',
                                        backgroundImage: 'url(https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/fot_camp_3.jpg)',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        borderRadius: '12px',
                                    }
                                }
                            >
                            </Container>
                        </Container>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4d-content"
                        id="panel4d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            ¿Cómo garantizan la calidad del café Don Gastón durante la producción?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Container
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                                gap: 4,
                                alignItems: 'center',
                            }}
                        >
                            <Typography>
                                Garantizamos la calidad del café Don Gastón mediante estrictos controles en cada etapa del proceso de producción. Desde la selección de los granos hasta el tostado y el envasado, realizamos pruebas de calidad y catas constantes para asegurar que cada lote cumpla con nuestros altos estándares. Además, contamos con certificaciones de calidad que avalan nuestro compromiso con la excelencia en cada taza de café.
                            </Typography>
                            <Container
                                sx={
                                    {
                                        width: '15rem',
                                        height: '15rem',
                                        backgroundImage: 'url(https://fvacgyuaywxrgqywpqll.supabase.co/storage/v1/object/public/DonGaston/image/fotos/fot_camp_4.jpg)',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        borderRadius: '12px',
                                    }
                                }
                            >
                            </Container>
                        </Container>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}
