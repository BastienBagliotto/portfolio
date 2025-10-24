"use client";

// components/person-card.tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PersonCard({ name }: { name: string }) {
  const handleClick = () => {
    const subdomain = name.toLowerCase();
    const currentHost = window.location.host;
    
    // Handle the case where we're on www.bagliotto.fr
    if (currentHost === 'www.bagliotto.fr') {
      // Create www.person.bagliotto.fr format
      window.location.href = `https://www.${subdomain}.bagliotto.fr`;
    } else {
      // For other cases, use the existing logic
      const url = new URL(window.location.origin);
      url.host = `${subdomain}.${url.host}`;
      window.location.href = url.toString();
    }
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