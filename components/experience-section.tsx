"use client";

import { Box, Typography, Paper, Link, Button, Stack } from '@mui/material';
import { Work, OpenInNew, PhotoLibrary } from '@mui/icons-material';
import { useState } from 'react';
import WebsiteGalleryDrawer from './website-gallery-drawer';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  website?: string;
  companyFolder?: string;
}

interface ExperienceSectionProps {
  experience: Experience[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<{
    name: string;
    website?: string;
    folder: string;
  } | null>(null);

  const handleOpenDrawer = (company: string, website?: string, folder?: string) => {
    if (folder) {
      setSelectedCompany({ name: company, website, folder });
      setDrawerOpen(true);
    }
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedCompany(null);
  };

  const hasImages = (folder: string) => {
    const imageMap: { [key: string]: string[] } = {
      'bizhive': ['/bizhive/1.png', '/bizhive/2.png', '/bizhive/3.png'],
      'akur8': [],
      'popoll': ['/popoll/1.webp'],
      'truckonline': ['/truckonline/1.webp', '/truckonline/2.webp', '/truckonline/3.webp', '/truckonline/4.webp']
    };
    
    return (imageMap[folder] || []).length > 0;
  };

  return (
    <>
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
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
            {exp.companyFolder && hasImages(exp.companyFolder) && (
              <Button
                variant="outlined"
                size="small"
                startIcon={<PhotoLibrary />}
                onClick={() => handleOpenDrawer(exp.company, exp.website, exp.companyFolder)}
                sx={{
                  ml: 2,
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  minWidth: 'auto',
                  px: 2
                }}
              >
                View Gallery
              </Button>
            )}
          </Box>
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
      
      {/* Website Gallery Drawer */}
      {selectedCompany && (
        <WebsiteGalleryDrawer
          open={drawerOpen}
          onClose={handleCloseDrawer}
          companyName={selectedCompany.name}
          websiteUrl={selectedCompany.website}
          companyFolder={selectedCompany.folder}
        />
      )}
    </>
  );
}
