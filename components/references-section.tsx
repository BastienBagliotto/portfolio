import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { Business, Phone, Email } from '@mui/icons-material';

interface Reference {
  name: string;
  title: string;
  phone: string;
  email: string;
}

interface ReferencesSectionProps {
  references: Reference[];
}

export default function ReferencesSection({ references }: ReferencesSectionProps) {
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Business sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
          Professional References
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
        Connect with these professionals who can provide insights into my work and professional capabilities.
      </Typography>
      <Grid container spacing={3}>
        {references.map((ref, index) => (
          <Card 
            key={index}
            sx={{ 
              flex: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                elevation: 3,
                transform: 'translateY(-2px)'
              }
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                {ref.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {ref.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                  <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                    {ref.phone}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                  <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                    {ref.email}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Paper>
  );
}
