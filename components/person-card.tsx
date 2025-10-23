import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { CardActionArea } from '@mui/material';

export default function PersonCard({ name }: { name: string }) {
  
  return (
    <Card 
      sx={{ 
        width: { xs: '100%', sm: '48%', md: '45%' },
        maxWidth: '400px',
        mx: 'auto',
        mb: 2
      }}
    >
      <Link href={`/${name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
        <CardActionArea>
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
              Bastien is an awesome software engineer.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}