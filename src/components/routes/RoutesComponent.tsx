// RoutesComponent.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './list';
import Layout from '../layout/Layout';

const RoutesComponent: React.FC = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<Layout>{React.createElement(route.component)}</Layout>}
                />
            ))}
        </Routes>
    );
};

export default RoutesComponent;
