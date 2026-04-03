"use client";

// components/person-card.tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function personProfileUrl(name: string): string {
  const slug = name.toLowerCase();
  const { hostname, port } = window.location;
  const host = hostname.toLowerCase();

  if (host === 'localhost' || host === '127.0.0.1') {
    const portPart = port ? `:${port}` : '';
    return `http://${slug}.localhost${portPart}/`;
  }

  if (host === 'bagliotto.fr' || host === 'www.bagliotto.fr') {
    return `https://${slug}.bagliotto.fr/`;
  }

  if (host === 'portfolio-7cb7e.web.app') {
    return `https://${slug}.portfolio-7cb7e.web.app/`;
  }

  if (host === 'portfolio-7cb7e.firebaseapp.com') {
    return `https://${slug}.portfolio-7cb7e.firebaseapp.com/`;
  }

  return `https://${slug}.bagliotto.fr/`;
}

export default function PersonCard({ name }: { name: string }) {
  const handleClick = () => {
    window.location.href = personProfileUrl(name);
  };
  
  return (
    <Card 
      sx={{ 
        width: { xs: '100%', sm: '48%', md: '45%' },
        maxWidth: '400px',
        mx: 'auto',
        mb: 2
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          sx={{ 
            height: { xs: 250, sm: 300, md: 400 },
            objectFit: 'cover'
          }}
          image={`/${name.toLowerCase()}.jpeg`}
          title={name}
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h4" 
            component="div"
            sx={{ 
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
            }}
          >
            {name}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: 'text.secondary' }}
          >
            {name === 'Bastien' 
              ? 'Lead Front-end Engineer & Angular Specialist with 7+ years experience'
              : `${name} is an awesome software engineer.`
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}