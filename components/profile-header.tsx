import { Box, Typography, Paper, Chip, Link } from '@mui/material';
import { Email, LinkedIn, GitHub, WhatsApp, Phone } from '@mui/icons-material';
import Image from 'next/image';

interface ProfileHeaderProps {
  name: string;
  title: string;
  bio: string;
  avatarSrc: string;
}

export default function ProfileHeader({ name, title, bio, avatarSrc }: ProfileHeaderProps) {
  return (
    <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
        <Box
          sx={{ 
            width: { xs: 150, md: 200 }, 
            height: { xs: 150, md: 200 },
            border: '4px solid',
            borderColor: 'primary.main',
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <Image
            src={avatarSrc}
            alt={`${name} profile picture`}
            fill
            sizes="(max-width: 600px) 150px, 200px"
            style={{
              objectFit: 'cover'
            }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 'bold',
            color: 'primary.main'
          }}>
            {name}
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom sx={{
            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' }
          }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ 
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.6,
            mt: 2,
            textAlign: 'justify'
          }}>
            {bio}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              mt: 3,
              justifyContent: 'center',
            }}
          >
            <Link
              href="mailto:bastien@bagliotto.fr"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <Chip
                icon={<Email />}
                label="bastien@bagliotto.fr"
                color="primary"
                variant="outlined"
                clickable
              />
            </Link>
            <Link href="tel:+33652794595" sx={{ textDecoration: 'none' }}>
              <Chip
                icon={<Phone />}
                label="06 52 79 45 95"
                color="primary"
                variant="outlined"
                clickable
              />
            </Link>
            <Link
              href="https://wa.me/33652794595"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <Chip
                icon={<WhatsApp />}
                label="WhatsApp"
                color="success"
                variant="outlined"
                clickable
              />
            </Link>
            <Link
              href="https://github.com/BastienBagliotto"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <Chip
                icon={<GitHub />}
                label="GitHub"
                color="default"
                variant="outlined"
                clickable
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bastien-bagliotto-ab992114b"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <Chip
                icon={<LinkedIn />}
                label="LinkedIn"
                color="primary"
                variant="outlined"
                clickable
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
