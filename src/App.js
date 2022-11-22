

import AppRouter from './router/AppRouter';
import { UserProvider } from './context/UserProvider';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ProductProvider from './context/ProductProvider';




function App() {


  return (
    <>
      <UserProvider>
      <PayPalScriptProvider options={{ "client-id": "AR3uPXoI9hv0AmrtikMOAAabPiRiuNY2k8vKUrVN5LSh-rcUBDRjlGPWQq1ww8QZOa7WZ_aRniTpyZjS" }}>
       <ProductProvider>
        <AppRouter />

        </ProductProvider>

        </PayPalScriptProvider>
      </UserProvider>
    </>
  );
}

export default App;
