import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import { getConfig } from "./config";
import ProtectedRoute from "./pages/ProtectedRoute";

// import AppLayout from "./pages/AppLayout";
// import Homepage from "./pages/HomePage";
// import PageNotFound from "./pages/PageNotFound";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
import { Auth0Provider } from "@auth0/auth0-react";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,

  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};

export default function App() {
  return (
    <Auth0Provider {...providerConfig}>
      <AuthProvider>
        <CitiesProvider>
          <Suspense fallback={<SpinnerFullPage />}>
            <BrowserRouter>
              <Routes>
                <Route index element={<Homepage />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </CitiesProvider>
      </AuthProvider>
    </Auth0Provider>
  );
}
