import { Mail, Phone } from "lucide-react";
import React from "react";

const TopNavbar = () => {
  return (
    <div className="bg-gray-800 text-white flex relative flex-row items-center justify-between md:py-4 py-2 px-6 md:px-16 z-30">
      <div className="flex items-start gap-8">
        <div className="flex items-center gap-2">
          <Phone color="#E74D3C" className="w-4 md:w-6"/>
          <a href="tel:+91 471 2308874">
          <span className="text-[12px] md:text-[1rem]">+91 471 2308874</span></a>
        </div>
        <div className="items-center gap-2 md:flex hidden">
          <Mail color="#E74D3C" />
          <a href="mailto: ucekprincipal@gmail.com">
          <span className="text-sm md:text-[1rem]">
            ucekprincipal@gmail.com
          </span>
          </a>
        </div>
      </div>
      <div className=" md:mr-32 justify-center md:flex hidden">
        <a
          href="https://keralauniversity.ac.in"
          target="_blank"
          className="font-semibold ml-1"
        >
          University Of Kerala
        </a>
      </div>
      <div className="flex items-center md:space-y-0 md:space-x-5 gap-4">
        <span className="text-[12px] md:text-[1rem] hidden md:visible">Follow Us</span>
        <div className="flex space-x-2">
          <a href="https://www.facebook.com/UCEK.KARYAVATTOM" target="_blank">
          <svg
            className="w-4 h-4 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5714 0H0.857143C0.383036 0 0 0.3575 0 0.8V19.2C0 19.6425 0.383036 20 0.857143 20H20.5714C21.0455 20 21.4286 19.6425 21.4286 19.2V0.8C21.4286 0.3575 21.0455 0 20.5714 0ZM18.0964 5.8375H16.3848C15.0429 5.8375 14.783 6.4325 14.783 7.3075V9.235H17.9866L17.5688 12.2525H14.783V20H11.4429V12.255H8.64911V9.235H11.4429V7.01C11.4429 4.4275 13.133 3.02 15.6027 3.02C16.7866 3.02 17.8018 3.1025 18.0991 3.14V5.8375H18.0964Z"
                fill="#E74D3C"
              />
            </svg>
          </svg>
          </a>
          <a href="https://www.linkedin.com/school/kerala-university-thiruvananthapuram/">
          <svg
            className="w-4 h-4 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0658 0H1.67107C1.34154 0 1.02551 0.131696 0.792504 0.366117C0.559493 0.600537 0.428589 0.918479 0.428589 1.25V18.75C0.428589 19.0815 0.559493 19.3995 0.792504 19.6339C1.02551 19.8683 1.34154 20 1.67107 20H19.0658C19.3954 20 19.7114 19.8683 19.9444 19.6339C20.1774 19.3995 20.3083 19.0815 20.3083 18.75V1.25C20.3083 0.918479 20.1774 0.600537 19.9444 0.366117C19.7114 0.131696 19.3954 0 19.0658 0ZM6.0125 16.25H3.27679V7.5H6.0125V16.25ZM4.64464 6.2835C4.24346 6.2835 3.85903 6.12187 3.57442 5.83058C3.28981 5.53929 3.13125 5.14967 3.13125 4.7425C3.13125 4.33533 3.28981 3.94571 3.57442 3.65442C3.85903 3.36313 4.24346 3.2015 4.64464 3.2015C5.04582 3.2015 5.43025 3.36313 5.71486 3.65442C5.99947 3.94571 6.15804 4.33533 6.15804 4.7425C6.15804 5.14967 5.99947 5.53929 5.71486 5.83058C5.43025 6.12187 5.04582 6.2835 4.64464 6.2835ZM17.2893 16.25H14.5536V11.7703C14.5536 10.7365 14.5536 9.36325 13.1589 9.36325C11.7643 9.36325 11.5527 10.5953 11.5527 11.7057V16.25H8.817V7.5H11.4277V8.76079H11.4664C11.8442 8.05079 12.6862 7.29933 13.8991 7.29933C16.6661 7.29933 17.2893 9.16575 17.2893 11.4303V16.25Z"
                fill="#E74D3C"
              />
            </svg>
          </svg>
          </a>
          <svg
            className="w-4 h-4 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3343 2.00146C19.6036 2.34546 18.8222 2.57567 18.0133 2.68396C18.8471 2.17282 19.4901 1.39453 19.792 0.465104C19.0104 0.945958 18.1534 1.28432 17.2453 1.46146C16.5028 0.681 15.4434 0.200516 14.2828 0.200516C11.8982 0.200516 10.0028 2.11968 10.0028 4.49089C10.0028 4.82239 10.0376 5.1461 10.1061 5.45775C6.6735 5.28968 3.64463 3.6661 1.66594 1.18232C1.31257 1.79439 1.11164 2.51146 1.11164 3.27875C1.11164 4.74882 1.85114 6.0326 2.99099 6.76375C2.3237 6.74596 1.67567 6.55282 1.11786 6.22517V6.27239C1.11786 8.36775 2.63172 10.1023 4.61121 10.5123C4.27472 10.6046 3.91594 10.6561 3.54393 10.6561C3.28547 10.6561 3.03421 10.6328 2.78807 10.5886C3.29921 12.2948 4.89712 13.5392 6.79107 13.5736C5.29257 14.7145 3.39434 15.3963 1.33468 15.3963C0.991564 15.3963 0.653682 15.3758 0.320789 15.3365C2.23688 16.5585 4.50179 17.2505 6.93068 17.2505C14.2739 17.2505 18.52 10.7182 18.52 5.01425C18.52 4.83818 18.5157 4.66446 18.5071 4.49146C19.2977 3.93075 19.982 3.23589 20.5343 2.43782L20.3343 2.00146Z"
                fill="#E74D3C"
              />
            </svg>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
