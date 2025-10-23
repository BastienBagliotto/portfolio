import PersonCard from "./person-card";
import { Container, Box } from '@mui/material';

export default function PeopleList() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <PersonCard name="Bastien" />
        <PersonCard name="Romain" />
      </Box>
    </Container>
  )
}