"use client";

import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useTheme,
  useMediaQuery,
  Paper,
  Chip,
  Stack,
  Modal,
  Backdrop,
  Fade
} from '@mui/material';
import { Close, OpenInNew, ZoomIn } from '@mui/icons-material';
import Image from 'next/image';

interface WebsiteGalleryDrawerProps {
  open: boolean;
  onClose: () => void;
  companyName: string;
  websiteUrl?: string;
  companyFolder: string;
}

export default function WebsiteGalleryDrawer({ 
  open, 
  onClose, 
  companyName, 
  websiteUrl, 
  companyFolder 
}: WebsiteGalleryDrawerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Define actual images for each company folder
  const getImagePaths = (folder: string) => {
    const imageMap: { [key: string]: string[] } = {
      'bizhive': ['/bizhive/1.png', '/bizhive/2.png', '/bizhive/3.png'],
      'akur8': [], // No images available
      'popoll': ['/popoll/1.webp'],
      'truckonline': ['/truckonline/1.webp', '/truckonline/2.webp', '/truckonline/3.webp', '/truckonline/4.webp']
    };
    
    return imageMap[folder] || [];
  };

  const imagePaths = getImagePaths(companyFolder);

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: '100%', sm: '50%', md: '40%', lg: '35%' },
          maxWidth: '600px',
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 2,
          pb: 2,
          borderBottom: `1px solid ${theme.palette.divider}`
        }}>
          <Box>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
              {companyName} Gallery
            </Typography>
            {websiteUrl && (
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <Chip 
                  label="Visit Website" 
                  icon={<OpenInNew />}
                  clickable
                  onClick={() => window.open(websiteUrl, '_blank')}
                  color="primary"
                  size="small"
                />
              </Stack>
            )}
          </Box>
          <IconButton onClick={onClose} size="large">
            <Close />
          </IconButton>
        </Box>

        {/* Image Gallery */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <ImageList 
            variant="masonry" 
            cols={isMobile ? 1 : 2} 
            gap={8}
            sx={{ 
              overflow: 'hidden',
              '& .MuiImageListItem-root': {
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: theme.shadows[2],
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: theme.shadows[4],
                }
              }
            }}
          >
            {imagePaths.map((imagePath, index) => (
              <ImageListItem 
                key={index}
                onClick={() => handleImageClick(imagePath)}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    '& .zoom-icon': {
                      opacity: 1
                    }
                  }
                }}
              >
                <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image
                    src={imagePath}
                    alt={`${companyName} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 600px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      // Hide image if it doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <Box
                    className="zoom-icon"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      opacity: 0,
                      transition: 'opacity 0.2s ease-in-out',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: '50%',
                      p: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <ZoomIn sx={{ color: 'white', fontSize: '2rem' }} />
                  </Box>
                </Box>
                <ImageListItemBar
                  title={`Screenshot ${index + 1}`}
                  subtitle={companyName}
                  sx={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    '& .MuiImageListItemBar-title': {
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    },
                    '& .MuiImageListItemBar-subtitle': {
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.75rem'
                    }
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Drawer>
    
    {/* Full-screen Image Modal */}
    <Modal
      open={!!selectedImage}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(4px)'
        }
      }}
    >
      <Fade in={!!selectedImage}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '95vw', sm: '90vw', md: '80vw', lg: '70vw' },
            height: { xs: '85vh', sm: '80vh', md: '75vh', lg: '70vh' },
            maxWidth: '1200px',
            maxHeight: '800px',
            outline: 'none',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }
            }}
            size="large"
          >
            <Close />
          </IconButton>
          
          {/* Full-screen image */}
          {selectedImage && (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: theme.shadows[24]
              }}
            >
              <Image
                src={selectedImage!}
                alt={`${companyName} full screen`}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'contain',
                }}
                priority
              />
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
    </>
  );
}
