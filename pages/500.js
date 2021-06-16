import Image from "next/image";
import Link from "next/link";

export default function Custom500() {
  return (
    <div className='error404'>
      <div className='errorImage'>
        <Image
          style={{ width: "100%", height: "100%", display: "block" }}
          src='/images/505.svg'
          height='400'
          width='400'
        />{" "}
      </div>
      <div className='content'>
        <h3>Oops, something went wrong</h3>
        <p>
          Server error 500. We apologise and are fixing the problem. Try again
          at a later time.
        </p>
        <Link href='/'>
          <a aria-label='back to home'>Bact to Home</a>
        </Link>
      </div>
    </div>
  );
}
