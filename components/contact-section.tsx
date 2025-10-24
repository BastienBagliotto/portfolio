import { Box, Typography, Paper, Chip, Link } from '@mui/material';
import { Email, LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';

interface ContactSectionProps {
  availabilityText: string;
}

export default function ContactSection({ availabilityText }: ContactSectionProps) {
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Email sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
          Contact & Availability
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {availabilityText}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
    </Paper>
  );
}
