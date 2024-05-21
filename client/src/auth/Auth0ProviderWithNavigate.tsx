// Import necessary modules and types from the @auth0/auth0-react package and the events module
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
// import { on } from "events";

// Define a type for the props, which includes children of type ReactNode
type Props = {
  children: React.ReactNode;
}

// Define the Auth0ProviderWithNavigate component, which takes children as props
const Auth0ProviderWithNavigate = ({ children }: Props) => {
    
  const domain = import.meta.env.VITE_AUTH0_DOMAIN; // Retrieve Auth0 domain from environment variables
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID; // Retrieve Auth0 client ID from environment variables
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL; // Retrieve Auth0 redirect URI from environment variables

// If any of the domain, client ID, or redirect URI are missing, throw an error
  if (!domain || !clientId || !redirectUri) {
    throw new Error(
      "unable to initialize Auth"
    );
  }


// Define a callback function to handle redirects, optionally accepting appState and user parameters
  const onRedirectCallback = (appState?: AppState, user?: User) => {
    // Log the user object to the console
    console.log("USER", user);
  }

  return ( // Return the Auth0Provider component with the domain, client ID, redirect URI, and onRedirectCallback function as props and required children
    <Auth0Provider 
        domain={domain} 
        clientId={clientId}
        authorizationParams={{
            redirect_uri: redirectUri,
        }}
        onRedirectCallback={ onRedirectCallback }
    >
        { children }
    </Auth0Provider>
  );
}

// Export the Auth0ProviderWithNavigate component as the default export
export default Auth0ProviderWithNavigate;