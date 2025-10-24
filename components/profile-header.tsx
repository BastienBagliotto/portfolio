import { Box, Typography, Avatar, Paper } from '@mui/material';
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
            mt: 2
          }}>
            {bio}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
