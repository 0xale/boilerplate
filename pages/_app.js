import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnectV1, walletConnect, safeWallet, paperWallet, magicLink } from "@thirdweb-dev/react";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect({
          projectId: "fc2b854f99c31d97d1144969ba153d8e",
        }),
        walletConnectV1(),
        safeWallet(),
        magicLink({
          apiKey: "pk_live_468E660662BCDE35",
        }),
      ]}
      activeChain="mumbai"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default App;
