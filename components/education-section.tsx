import { Box, Typography, Paper } from '@mui/material';
import { School } from '@mui/icons-material';

interface EducationEntry {
  institution: string;
  period: string;
  description: string[];
}

interface EducationSectionProps {
  education: EducationEntry[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <School sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
          Education & Academic Journey
        </Typography>
      </Box>
      
      {education.map((edu, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
            {edu.institution}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {edu.period}
          </Typography>
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            {edu.description.map((item, itemIndex) => (
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
