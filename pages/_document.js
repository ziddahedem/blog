import Document, { Html, Head, Main, Link, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const ads = process.env.NODE_ENV === "production" && (
      <script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      ></script>
    );

    return (
      <Html lang='en'>
        <Head>
          {/* Google Ads */}

          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
          />

          <link
            rel='preload'
            href='/fonts/proxima/Proxima-Nova-Light.ttf'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/proxima/Proxima-Nova-Regular.ttf'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/favicons/favicon-196.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='180x180'
            href='/favicons/favicon-180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='196x196'
            href='/favicons/favicon-196.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='167x167'
            href='/favicons/favicon-167.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='152x152'
            href='/favicons/favicon-152.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicons/favicon-32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='128x128'
            href='/favicons/favicon-128.png'
          />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link
            rel='shortcut icon'
            href='/favicons/favicon-196.ico'
            type='image/x-icon'
          />
          <link
            href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'
            rel='stylesheet'
          />
          {ads && ads}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;