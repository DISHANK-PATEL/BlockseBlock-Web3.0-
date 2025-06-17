import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {
  IdentityKitProvider,
  IdentityKitTheme,
} from "@nfid/identitykit/react";
import {
  IdentityKitAuthType,
  NFIDW,
  InternetIdentity,
} from "@nfid/identitykit";
import "@nfid/identitykit/react/styles.css";
import { AuthProvider } from './StateManagement/useContext/useClient';

const signers = [NFIDW, InternetIdentity];
const canisterID = import.meta.env.CANISTER_ID_DEMO2_BACKEND;

ReactDOM.createRoot(document.getElementById('root')).render(
  <IdentityKitProvider
    signers={signers}
    theme={IdentityKitTheme.SYSTEM}
    authType={IdentityKitAuthType.DELEGATION}
    signerClientOptions={{
      targets: [canisterID],
      retryTimes: 2
    }}
  >
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  </IdentityKitProvider>
);
