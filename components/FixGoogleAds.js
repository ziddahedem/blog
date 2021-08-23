import AdSense from "react-adsense";

const FixGoogleAds = () => {
  return (
    <div
      className='horizontal'
      style={{ margin: "1rem 0 1rem", width: "100%", textAlign: "center" }}
    >
      <AdSense.Google
        client={process.env.NEXT_PUBLIC_DATA_AD_CLIENT}
        slot={process.env.NEXT_PUBLIC_DISPLAY_ADS}
        style={{ display: "block", height: 200, width: "100%" }}
        format=''
        layout=''
      />
    </div>
  );
};

export default FixGoogleAds;
