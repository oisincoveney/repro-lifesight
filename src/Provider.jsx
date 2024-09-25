import { MetabaseProvider } from "@metabase/embedding-sdk-react";

export const Provider = ({ children }) => {
  return <MetabaseProvider config={{
    metabaseInstanceUrl: "http://localhost:3000",
    apiKey: "API KEY HERE"
  }}>{children}</MetabaseProvider>;
};
