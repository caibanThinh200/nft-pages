import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "../components/Loading";
import Moralis from "moralis";
import { APP_ID, SERVER_URL, SITE_ERROR } from "../../config";
import { errorAlertCenter, errors } from "../components/toastGroup";
import "../styles/style.scss";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [pageLoading, setPageLoading] = useState(false);
  const [hAlert, setHAlert] = useState(true);
  const router = useRouter();

  try {
    // Moralis.start({ serverUrl: SERVER_URL, appId: APP_ID })
  } catch (e) {
    errorAlertCenter(SITE_ERROR[1]);
  }

  useEffect(() => {
    const handleStart = (url) => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setTimeout(() => setPageLoading(false), 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <Component
        {...pageProps}
        startLoading={() => setPageLoading(true)}
        closeLoading={() => setPageLoading(false)}
        headerAlert={hAlert}
        closeAlert={() => setHAlert(false)}
      />
      <ToastContainer
        style={{ fontSize: 14, padding: "5px !important", lineHeight: "15px" }}
      />
      <Loading loading={pageLoading} />
    </>
  );
}

export default MyApp;
