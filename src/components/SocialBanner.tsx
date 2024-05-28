import React from "react";
import Image from "next/image";

const SocialBanner = () => {
  return (
    <section>
      <div className="flex relative h-screen justify-center items-center">
        <Image
          src="/socials.png"
          alt="socials-swag-inu"
          fill={true}
          className="object-cover h-screen w-screen object-left-top grayscale"
        />
        <div className="py-5 z-10 w-[90dvw] md:w-[65dvw] bg-white/90 flex flex-col gap-14 text-center justify-center items-center border-[3px] border-black">
          <span className="text-center text-2xl md:text-4xl leading-[2.4rem] md:leading-[3.6rem] tracking-[5.76px] md:tracking-[8.64px] font-semibold">
            YK HE LOVES <br />
            THE ATTENTION...
          </span>
          <p className="font-semibold text-base tracking-[3.84px] md:text-2xl md:leading-[2.4rem] md:tracking-[5.76px] ">
            Join the SWAG Squad to <br />
            Follow Him on his
            <br /> <text className="line-through">mischief</text> endeavors
          </p>
          <div className="flex gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <g clip-path="url(#clip0_285_639)">
                <mask
                  id="mask0_285_639"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="61"
                  height="60"
                >
                  <path d="M60.5 0H0.5V60H60.5V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_285_639)">
                  <path
                    d="M53.4688 0H7.53125C3.648 0 0.5 3.148 0.5 7.03125V52.9688C0.5 56.852 3.648 60 7.53125 60H53.4688C57.352 60 60.5 56.852 60.5 52.9688V7.03125C60.5 3.148 57.352 0 53.4688 0Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M42.2073 11.7188H48.4098L34.8591 27.2063L50.8004 48.2812H38.3185L28.5423 35.4994L17.356 48.2812H11.1498L25.6435 31.7156L10.3511 11.7188H23.1498L31.9866 23.4019L42.2073 11.7188ZM40.0304 44.5688H43.4673L21.2823 15.2363H17.5941L40.0304 44.5688Z"
                    fill="#121212"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_285_639">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <g clip-path="url(#clip0_285_646)">
                <path
                  d="M51.5 0H9.5C4.52944 0 0.5 4.02944 0.5 9V51C0.5 55.9706 4.52944 60 9.5 60H51.5C56.4706 60 60.5 55.9706 60.5 51V9C60.5 4.02944 56.4706 0 51.5 0Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M23.8203 47.3438C22.5312 47.3438 22.6484 46.875 22.2969 45.7031L18.5469 33.3984L47.2578 16.5234"
                  fill="#D9D9D9"
                />
                <path
                  d="M23.8203 47.3438C24.6406 47.3438 25.1094 46.875 25.6953 46.4062L30.9688 41.3672L24.4062 37.3828"
                  fill="#9747FF"
                />
                <path
                  d="M24.4062 37.3827L40.2266 48.9843C41.8672 50.039 43.2734 49.453 43.7422 47.3437L50.1875 17.1093C50.7734 14.5312 49.1328 13.3593 47.375 14.1796L9.75781 28.7108C7.29687 29.6483 7.29687 31.1718 9.28906 31.7577L19.0156 34.8046L41.2812 20.6249C42.3359 20.039 43.2734 20.2733 42.5703 21.0937"
                  fill="#121212"
                />
              </g>
              <defs>
                <clipPath id="clip0_285_646">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.5 0H9.5C4.52944 0 0.5 4.02944 0.5 9V51C0.5 55.9706 4.52944 60 9.5 60H51.5C56.4706 60 60.5 55.9706 60.5 51V9C60.5 4.02944 56.4706 0 51.5 0Z"
                fill="#F5F5F5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M47.0861 17.6904L34.3424 29.173L27.7699 23.9093L12.9211 37.4217L13.7636 38.3455L27.8211 25.5518L34.3886 30.8142L47.9236 18.6205L47.0861 17.6904Z"
                fill="#3E3C3C"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M45.0037 17.5293V18.7793H46.8787V20.6543H48.1287V17.5293H45.0037Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.6736 40.6514V42.5264H44.7986V43.7764H47.9236V40.6514H46.6736Z"
                fill="#5B2B99"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.981 19.5771L13.1135 20.4773L29.181 35.9022L32.9235 32.1597L37.9235 37.1597L39.1735 35.9097L46.231 42.9684L47.1148 42.0848L39.1735 34.1423L37.9235 35.3923L32.9235 30.3923L29.1635 34.1522L13.981 19.5771Z"
                fill="#9747FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.9236 12.5264V47.5238H14.1736V12.5264H12.9236Z"
                fill="#2B4255"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.9236 46.2764V47.5264H47.9236V46.2764H12.9236Z"
                fill="#2B4255"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;
