import { Box, Typography, Paper, Link } from '@mui/material';
import { Work, OpenInNew } from '@mui/icons-material';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  website?: string;
}

interface ExperienceSectionProps {
  experience: Experience[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Work sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
          Experience
        </Typography>
      </Box>
      {experience.map((exp, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {exp.title}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 1 }}>
            {exp.website ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Link 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: 'secondary.main', 
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: 'secondary.dark'
                    }
                  }}
                >
                  {exp.company}
                </Link>
                <OpenInNew sx={{ fontSize: '1rem', color: 'text.secondary' }} />
              </Box>
            ) : (
              exp.company
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {exp.duration}
          </Typography>
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            {exp.description.map((item, itemIndex) => (
              <Typography key={itemIndex} component="li" variant="body2" sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Paper>
  );
}
