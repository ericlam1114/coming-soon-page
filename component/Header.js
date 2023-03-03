import React from "react";
import Head from "next/head";

function Header() {
  return (
    <div>
      <Head>
        <title>Podcast Advertising Made Simplee</title>

        <meta name="description" content="Podcast Advertising Made Simple" key="desc" />
        <meta property="og:title" content="Podcast Advertising Made Simple" />
        <meta
          property="og:description"
          content="Join over one hundred podcasters signed up to monetize
          their podcasts with branded in-stream ads, the easy way."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/T1Zv1ZY5/poderly.png"
        />
      </Head>
   

      <div class="flex flex-col justify-center -mt-8 items-center md:items-baseline -mb-10 md:-mb-56">
        <img
          src="/logo.png"
          className="max-w-sm scale-50 -mt-20 -mb-10"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
