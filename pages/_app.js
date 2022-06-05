import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import "../app/assets/styles/globals.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
};

export default MyApp;
