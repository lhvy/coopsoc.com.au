import React, { useEffect } from "react";

// NextJS router
import { useRouter } from "next/router";

// Styles
import "styles/globals.scss";
import "styles/theme/main.scss";

// Icons
import "assets/vendor/nucleo/css/nucleo.css";

// FontAwesome config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
