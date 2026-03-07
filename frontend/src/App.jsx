import {Routes, Route} from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import Layout from "./components/Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUp from "./pages/SignUp.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";

function ProtectedRoute({ children }) {
  return <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
      </SignedOut>
  </>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="{sign-in/*}" element={<SignInPage />} />
        <Route path="sign-up/*" element={<SignUp />} />
        <Route path="dashboard/*" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
      </Route>

    </Routes>
  )
}


export default App