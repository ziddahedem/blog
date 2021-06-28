import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";
import PopularBlogs from "components/PopularBlogs";
import dynamic from "next/dynamic";
const GoogleAds = dynamic(() => import("components/GoogleAds"), {
  loading: () => <div style={{ height: 0 }}></div>,
});
import Image from "next/image";
import AsideCateogories from "components/AsideCategories";

const Aside2 = () => {
  return (
    <aside className='aside'>
      <div className='subscribe widget'>
        <h3 className='heading'>
          Over 100+ Readers
          <p>Get fresh content from Codevo</p>
        </h3>
        <div className='social-icons d-flex'>
          <Link href='https://web.facebook.com/codevv/'>
            <a aria-label='icon' className='icon icon-facebook' target='_blank'>
              <FaFacebookF />
            </a>
          </Link>
          <Link href='https://twitter.com/EdemZiddah2'>
            <a aria-label='icon' className='icon icon-twitter' target='_blank'>
              <FaTwitter />
            </a>
          </Link>
          <Link href='https://www.youtube.com/channel/UCRITDeojq9IsQfTWPeJ-pDQ?sub_confirmation=1'>
            <a aria-label='icon' className='icon icon-youtube' target='_blank'>
              <FaYoutube />
            </a>
          </Link>
          <Link href='#'>
            <a aria-label='icon' className='icon icon-linkin' target='_blank'>
              <FaLinkedinIn />
            </a>
          </Link>
          <Link href='https://github.com/ziddahedem'>
            <a aria-label='icon' className='icon icon-envelope' target='_blank'>
              <FaGithub />
            </a>
          </Link>
          <Link href='https://www.pinterest.com/ekziddah/'>
            <a
              aria-label='icon'
              className='icon icon-pinterest'
              target='_blank'
            >
              <FaPinterest />
            </a>
          </Link>
        </div>
      </div>
      <div className='widget' style={{ maxHeight: "60rem !important" }}>
        <GoogleAds slot={process.env.VERTICAL_SLOT} />
      </div>
      <div className='widget'>
        <div className='heading'>
          <span className='orange-text'>Popular</span> Blogs
        </div>
        <PopularBlogs />
      </div>

      <div className='widget advertisement'>
        <GoogleAds format='auto' slot={process.env.VERTICAL_SLOT} />
      </div>
      <div className='widget no-pad'>
        <Link href='https://www.hostg.xyz/aff_c?offer_id=6&aff_id=79354'>
          <a>
            <Image
              style={{ width: "100%", height: "100%" }}
              src='/images/widgetDiscount.jpg'
              height='400'
              width='300'
            />
          </a>
        </Link>
      </div>
      {/* <AsideCateogories /> */}
      <div className='widget advertisement'>
        <GoogleAds format='auto' slot={process.env.VERTICAL_SLOT} />
      </div>
    </aside>
  );
};

export default Aside2;