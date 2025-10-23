// components/person-card.tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PersonCard({ name }: { name: string }) {
  const handleClick = () => {
    const subdomain = name.toLowerCase();
    // Check if we're already on a subdomain
    const currentHost = window.location.hostname;
    
    if (currentHost.includes('herokuapp.com') || currentHost === 'bagliotto.fr') {
      // Redirect to subdomain
      window.location.href = `https://${subdomain}.bagliotto.fr`;
    } else {
      // Navigate to route if on subdomain
      window.location.href = `/${subdomain}`;
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
          image={`/${name.toLowerCase()}.png`}
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
            {name} is an awesome software engineer.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}