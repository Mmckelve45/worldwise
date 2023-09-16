// import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
// import { AuthProvider } from "./contexts/AuthContext";
// import { getConfig } from "./config";
// import ProtectedRoute from "./pages/ProtectedRoute";

import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
import { useAuth0 } from "@auth0/auth0-react";
// import { CallbackPage } from "./pages/Callback";
import ProtectedRoute from "./pages/ProtectedRoute";

// const Homepage = lazy(() => import("./pages/Homepage"));
// const Product = lazy(() => import("./pages/Product"));
// const Pricing = lazy(() => import("./pages/Pricing"));
// const Login = lazy(() => import("./pages/Login"));
// const AppLayout = lazy(() => import("./pages/AppLayout"));
// const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// const onRedirectCallback = (appState) => {
//   history.push(
//     appState && appState.returnTo ? appState.returnTo : window.location.pathname
//   );
// };

// const config = getConfig();

// const providerConfig = {
//   domain: config.domain,
//   clientId: config.clientId,
//   onRedirectCallback,

//   authorizationParams: {
//     redirect_uri: window.location.origin,
//     ...(config.audience ? { audience: config.audience } : null),
//   },
// };

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <SpinnerFullPage />
      </div>
    );
  }
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return (
  //     <div className="page-layout">
  //       <SpinnerFullPage />
  //     </div>
  //   );
  // }
  return (
    // <Suspense fallback={<SpinnerFullPage />}>
    <CitiesProvider>
      <Routes>
        <Route index element={<Homepage />} />
        <Route
          path="app"
          element={<ProtectedRoute component={AppLayout} />}
          // element={
          //   <ProtectedRoute>
          //     <AppLayout />
          //   </ProtectedRoute>
          // }
          // element={<AppLayout />}
        >
          <Route index element={<Navigate replace to="cities" />} />
          {/* <Route
            path="cities"
            element={<ProtectedRoute component={CityList} />}
          /> */}
          <Route path="cities" element={<CityList />} />
          <Route path="cities/:id" element={<City />} />
          <Route path="countries" element={<CountryList />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="/callback" element={<CallbackPage />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CitiesProvider>
    // <Suspense fallback={<SpinnerFullPage />}>
    // <CitiesProvider>
    //   <BrowserRouter>
    //     <Auth0Provider {...providerConfig}>
    //       <Routes>
    //         <Route index element={<Homepage />} />
    //         <Route
    //           path="app"
    //           // element={<ProtectedRoute component={AppLayout} />}
    //           element={
    //             <ProtectedRoute>
    //               <AppLayout />
    //             </ProtectedRoute>
    //           }
    //           // element={<AppLayout />}
    //         >
    //           <Route index element={<Navigate replace to="cities" />} />
    //           <Route path="cities" element={<CityList />} />
    //           <Route path="cities/:id" element={<City />} />
    //           <Route path="countries" element={<CountryList />} />
    //           <Route path="form" element={<Form />} />
    //         </Route>
    //         <Route path="product" element={<Product />} />
    //         <Route path="pricing" element={<Pricing />} />
    //         {/* <Route path="login" element={<Login />} /> */}
    //         <Route path="/callback" element={<CallbackPage />} />
    //         <Route path="*" element={<PageNotFound />} />
    //       </Routes>
    //     </Auth0Provider>
    //   </BrowserRouter>
    // </CitiesProvider>
    // </Suspense>
  );
}
