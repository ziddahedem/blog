import AdSense from "react-adsense";
import { useState, useEffect } from "react";

const GoogleAds = ({
  slot,
  format = "fluid",
  layout = "in-article",
  responsive = "",
  layoutKey = "",
  styles = { display: "block" },
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ads = document.querySelector("ins.adsbygoogle");
    const showAds = setTimeout(() => {
      if (ads.getAttribute("data-ad-status") === "filled") {
        setShow(true);
        console.log("show empty div");
      }
    }, 2000);

    clearTimeout(showAds);
  });
  return show ? (
    <div></div>
  ) : (
    <div
      style={{
        overflow: "hidden",
        textAlign: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <AdSense.Google
        client={process.env.NEXT_PUBLIC_DATA_AD_CLIENT}
        slot={slot}
        style={styles}
        format={format}
        layout={layout}
        responsive={responsive}
        layoutKey={layoutKey}
      />
    </div>
  );
};

export default GoogleAds;
