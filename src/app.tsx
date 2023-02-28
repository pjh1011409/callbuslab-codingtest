import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../src/layout/layout';

const RentalPage = React.lazy(() => import('./pages/rentalPage'));
const ResidencyInputPage = React.lazy(() => import('./pages/residencyInputPage'));
const CompletionPage = React.lazy(() => import('./pages/completionPage'));

const App = () => (
  <Suspense fallback={''}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate replace to="/rentalPage" />} />
        <Route path="/rentalPage" element={<RentalPage />} />
        <Route path="/residencyPage" element={<ResidencyInputPage />} />
        <Route path="/completionPage" element={<CompletionPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default App;
