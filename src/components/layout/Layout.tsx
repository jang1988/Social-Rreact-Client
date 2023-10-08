import React, { ReactNode } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Grid from '@mui/material/Grid';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Grid container spacing={2} marginX={5} marginTop={2} >
                <Grid item xs={6} md={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={6} md={10}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default Layout;
