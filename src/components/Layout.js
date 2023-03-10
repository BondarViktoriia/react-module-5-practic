
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import {Box} from './Styled'

export const Layout = () => {
  return (
    <Box >
    <AppBar/>
     <Suspense fallback={null}><Outlet/></Suspense>
    </Box>
  );
};