'use client';

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EmotionCacheProvider from './registry';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  );
}
