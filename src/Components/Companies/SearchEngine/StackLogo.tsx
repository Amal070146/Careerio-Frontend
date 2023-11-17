type Props = {
    colors:string
};

export const MongoDBLogo = ({colors}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="49"
      viewBox="0 0 22 49"
      fill="none"
    >
      <path
        d="M21.4578 19.3724C18.8951 8.05917 12.837 4.3408 12.1862 2.91955C11.6185 2.12073 11.1116 0.985347 10.696 0C10.623 1.00359 10.5845 1.38881 9.63565 2.40052C8.1698 3.54806 0.637769 9.86564 0.025475 22.7157C-0.54627 34.7021 8.68274 41.8448 9.93572 42.7551L10.0776 42.8565C10.3386 44.7862 10.5616 46.7207 10.7467 48.6591H11.7219C11.9529 46.5671 12.2981 44.4892 12.7559 42.4348C13.6014 41.8347 13.9805 41.4961 14.4793 41.0298C16.8412 38.8448 18.7183 36.1884 19.9891 33.2324C21.26 30.2765 21.8964 27.0867 21.8572 23.8693C21.8775 22.219 21.6484 20.4997 21.4578 19.3724ZM10.6392 35.9875C10.6392 35.9875 10.6392 19.1778 11.1968 19.1798C11.6286 19.1798 12.1903 40.8635 12.1903 40.8635C11.4178 40.7723 10.6392 37.2952 10.6392 35.9875Z"
        fill={colors}
      />
    </svg>
  );
};
export const DjangoLogo = ({ colors }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="41"
      viewBox="0 0 32 41"
      fill="none"
    >
      <path
        d="M6.67768 20.7572C6.65538 24.7817 9.60736 27.1802 14.3172 26.0894V15.4229C9.54857 13.9712 6.69796 16.909 6.67768 20.7572ZM14.4611 0H20.947V30.7019C14.7308 31.7176 8.77408 32.3624 4.5164 29.9821C-0.967884 26.9146 -1.40987 17.1706 2.93093 12.8298C5.13073 10.63 9.56276 9.07898 14.3172 10.0907V0.433877C14.305 0.229103 14.2928 0.0243296 14.4611 0ZM31.4695 6.77578H24.9836V0H31.4695V6.77578Z"
        fill={colors}
      />
      <path
        d="M31.4696 10.2043C31.4636 14.981 31.4636 18.4115 31.4636 24.2161C31.1878 29.9193 31.2527 34.4588 29.1624 37.1878C28.7508 37.7271 27.877 38.5097 27.1451 39.0612C26.5307 39.5234 25.3589 40.4621 24.6959 40.5027C24.0248 40.5453 22.3035 39.5721 21.5249 39.2051C20.5011 38.7246 19.5563 38.0839 18.4979 37.7656C20.9674 36.2369 23.3071 35.0894 24.264 31.9995C25.0953 29.3111 24.9838 25.4163 24.9838 21.6209C24.9838 17.8722 25.002 13.5151 25.002 10.2063L31.4696 10.2043Z"
        fill={colors}
      />
    </svg>
  );
};
export const ReactLogo = ({ colors }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="50"
      viewBox="0 0 49 50"
      fill="none"
    >
      <mask
        id="mask0_19_1668"
        style={{maskType:"luminance"}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="49"
        height="50"
      >
        <path d="M0 0.787537H48.6591V49.4467H0V0.787537Z" fill="white" />
      </mask>
      <g mask="url(#mask0_19_1668)">
        <path
          d="M48.6592 24.4866C48.6592 21.2629 44.6226 18.2075 38.4327 16.3139C39.8621 10.0064 39.2275 4.98645 36.4296 3.37867C35.7516 2.99897 34.9843 2.80784 34.2075 2.82517V5.03511C34.6637 5.03511 35.0306 5.12634 35.3388 5.29462C36.6871 6.06911 37.273 9.01299 36.8168 12.8023C36.7073 13.735 36.5289 14.7162 36.31 15.7178C34.2372 15.2183 32.1334 14.8573 30.0127 14.6372C28.7493 12.8941 27.3709 11.2374 25.8868 9.678C29.1206 6.6733 32.1557 5.027 34.2196 5.027V2.81503C31.4907 2.81503 27.9203 4.75937 24.3094 8.13104C20.7005 4.78167 17.1281 2.85558 14.4012 2.85558V5.06552C16.455 5.06552 19.5003 6.70371 22.7341 9.68813C21.3453 11.1479 19.9564 12.8023 18.6366 14.6372C16.5114 14.8549 14.4039 15.2193 12.3291 15.7279C12.1098 14.7787 11.9373 13.8192 11.8121 12.853C11.3458 9.06165 11.9216 6.11777 13.2618 5.33517C13.5578 5.15675 13.945 5.07565 14.4012 5.07565V2.86572C13.5699 2.86572 12.8137 3.04414 12.1608 3.41922C9.37309 5.027 8.74863 10.0348 10.1861 16.324C4.01653 18.2298 0.00012207 21.2731 0.00012207 24.4866C0.00012207 27.7103 4.0368 30.7656 10.2266 32.6573C8.79729 38.9667 9.43188 43.9867 12.2298 45.5925C12.8745 45.9696 13.6287 46.148 14.46 46.148C17.189 46.148 20.7593 44.2037 24.3702 40.832C27.9791 44.1834 31.5495 46.1075 34.2784 46.1075C35.0612 46.124 35.8344 45.9323 36.5188 45.5519C39.3065 43.9462 39.931 38.9383 38.4935 32.6492C44.6428 30.7555 48.6592 27.7001 48.6592 24.4866ZM35.7443 17.871C35.359 19.1966 34.9125 20.5037 34.4062 21.788C33.5773 20.1757 32.6671 18.6065 31.6792 17.0863C33.0883 17.2952 34.4467 17.5527 35.7463 17.871H35.7443ZM31.2028 28.4341C30.4602 29.7305 29.6627 30.9948 28.8124 32.2234C25.8366 32.4857 22.8436 32.4891 19.8672 32.2335C18.16 29.7949 16.667 27.2131 15.4048 24.517C16.665 21.8146 18.1517 19.2237 19.849 16.7721C22.8241 16.5093 25.8163 16.5052 28.7921 16.7599C29.6153 17.9399 30.4202 19.201 31.1926 20.531C31.9469 21.8286 32.6321 23.1464 33.2566 24.4764C32.6252 25.8226 31.9401 27.1429 31.2028 28.4341ZM34.4062 27.1446C34.9414 28.4726 35.3996 29.8026 35.7747 31.0921C34.4771 31.4104 33.1066 31.678 31.6894 31.8848C32.6732 30.3509 33.5799 28.7688 34.4062 27.1446ZM24.35 37.7279C23.4275 36.775 22.505 35.7147 21.5926 34.5529C22.4847 34.5935 23.397 34.6239 24.3195 34.6239C25.2522 34.6239 26.1747 34.6036 27.0769 34.5529C26.1848 35.7147 25.2623 36.775 24.35 37.7279ZM16.97 31.8848C15.603 31.6867 14.2458 31.4256 12.9029 31.1022C13.2699 29.8229 13.726 28.503 14.241 27.1851C14.6485 27.9759 15.0763 28.7706 15.5427 29.5654C16.009 30.3581 16.4834 31.1326 16.97 31.8848ZM24.2993 11.2452C25.2218 12.1981 26.1443 13.2585 27.0566 14.4202C26.1645 14.3797 25.2522 14.3493 24.3297 14.3493C23.397 14.3493 22.4746 14.3695 21.5723 14.4202C22.4644 13.2585 23.3869 12.1981 24.2993 11.2452ZM16.9599 17.0884C15.9763 18.619 15.0695 20.1976 14.2431 21.8184C13.7224 20.5259 13.2657 19.2084 12.8745 17.871C14.1721 17.5628 15.5427 17.2952 16.9599 17.0884ZM7.98427 29.5046C4.47271 28.0083 2.20195 26.0437 2.20195 24.4866C2.20195 22.9295 4.47271 20.9547 7.98427 19.4686C8.83581 19.1016 9.76844 18.7732 10.7315 18.467C11.2971 20.4094 12.0412 22.4328 12.9617 24.5069C12.0927 26.4577 11.3577 28.4654 10.7619 30.5163C9.82004 30.2246 8.89305 29.887 7.98427 29.5046ZM13.3206 43.6765C11.9723 42.9061 11.3864 39.9582 11.8425 36.1709C11.952 35.2382 12.1304 34.2549 12.3494 33.2533C14.2917 33.7298 16.4145 34.0968 18.6467 34.336C19.9102 36.079 21.2885 37.7357 22.7726 39.2952C19.5388 42.2999 16.5037 43.9462 14.4397 43.9462C14.0503 43.9504 13.6659 43.8585 13.3206 43.6786V43.6765ZM36.8472 36.1202C37.3136 39.9095 36.7378 42.8554 35.3976 43.638C35.1016 43.8164 34.7143 43.8955 34.2582 43.8955C32.2043 43.8955 29.1591 42.2593 25.9253 39.2729C27.4032 37.72 28.7722 36.0671 30.0228 34.3259C32.1479 34.1082 34.2554 33.7437 36.3302 33.2351C36.5593 34.2367 36.7357 35.1977 36.8472 36.1202ZM40.665 29.5046C39.8134 29.8715 38.8808 30.2 37.9177 30.5061C37.3115 28.4448 36.5664 26.427 35.6875 24.4663C36.5999 22.4044 37.3318 20.3911 37.8873 18.4569C38.8322 18.7495 39.7625 19.0871 40.6751 19.4686C44.1867 20.9649 46.4574 22.9295 46.4574 24.4866C46.4473 26.0437 44.1765 28.0184 40.665 29.5046Z"
          fill={colors}
        />
        <path
          d="M24.3195 29.02C25.5219 29.02 26.675 28.5424 27.5251 27.6922C28.3753 26.842 28.8529 25.6889 28.8529 24.4866C28.8529 23.2843 28.3753 22.1312 27.5251 21.281C26.675 20.4308 25.5219 19.9532 24.3195 19.9532C23.1172 19.9532 21.9641 20.4308 21.1139 21.281C20.2638 22.1312 19.7861 23.2843 19.7861 24.4866C19.7861 25.6889 20.2638 26.842 21.1139 27.6922C21.9641 28.5424 23.1172 29.02 24.3195 29.02Z"
          fill={colors}
        />
      </g>
    </svg>
  );
};
export const NextJsLogo = ({ colors }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="50"
      viewBox="0 0 49 50"
      fill="none"
    >
      <mask
        id="mask0_19_1675"
        style={{maskType:"luminance"}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="49"
        height="50"
      >
        <path d="M0 0.787537H48.6591V49.4467H0V0.787537Z" fill="white" />
      </mask>
      <g mask="url(#mask0_19_1675)">
        <path
          d="M22.736 0.799955C22.6305 0.810092 22.298 0.844559 21.998 0.866861C15.0884 1.49132 8.61672 5.21982 4.51313 10.9515C2.24704 14.0975 0.773924 17.7441 0.218966 21.5815C0.0243296 22.9196 0 23.3129 0 25.1255C0 26.938 0.0243296 27.3334 0.218966 28.6695C1.54087 37.8072 8.04497 45.4832 16.8624 48.3277C18.4418 48.8366 20.1064 49.1833 21.998 49.3942C22.736 49.4753 25.9231 49.4753 26.6611 49.3942C29.9274 49.0313 32.6969 48.2223 35.4259 46.8295C35.8455 46.6166 35.9266 46.5578 35.8699 46.5111C34.535 44.7507 33.2137 42.98 31.9062 41.1992L28.0155 35.942L23.1415 28.7262C21.5197 26.3128 19.8829 23.9095 18.2309 21.5166C18.2127 21.5105 18.1945 24.7159 18.1843 28.633C18.1701 35.4858 18.164 35.7615 18.0789 35.9237C17.9958 36.113 17.8476 36.2662 17.6612 36.3556C17.5092 36.4326 17.3774 36.4468 16.6576 36.4468H15.8345L15.6155 36.3089C15.48 36.2234 15.3701 36.1029 15.2972 35.9602L15.1958 35.7473L15.206 26.2101L15.2202 16.6689L15.3682 16.4824C15.4678 16.3658 15.5872 16.2676 15.721 16.1925C15.9156 16.0972 15.9906 16.0891 16.8158 16.0891C17.7849 16.0891 17.9471 16.1255 18.1985 16.4013C18.2695 16.4783 20.9092 20.4562 24.068 25.2451L33.666 39.786L37.5182 45.6211L37.7149 45.4934C39.5688 44.2608 41.2496 42.786 42.7126 41.108C45.7784 37.599 47.7671 33.2802 48.4402 28.6695C48.6348 27.3313 48.6591 26.938 48.6591 25.1255C48.6591 23.3129 48.6348 22.9196 48.4402 21.5815C47.1182 12.4457 40.6141 4.7677 31.7967 1.92317C30.1487 1.39921 28.4518 1.04393 26.7321 0.862806C26.2739 0.814147 23.1313 0.761433 22.738 0.801982L22.736 0.799955ZM32.6969 15.5193C32.81 15.5763 32.9106 15.655 32.9931 15.7511C33.0756 15.8471 33.1382 15.9585 33.1774 16.0789C33.2139 16.2006 33.224 18.8464 33.2139 24.8071L33.1997 33.359L31.6933 31.0477L30.1808 28.7364V22.5202C30.1808 18.4997 30.1991 16.2411 30.2274 16.1316C30.2612 16.005 30.3203 15.8865 30.4011 15.7834C30.482 15.6802 30.5829 15.5945 30.6978 15.5315C30.8945 15.4301 30.9654 15.422 31.7116 15.422C32.4151 15.422 32.5388 15.4342 32.6969 15.5193Z"
          fill={colors}
        />
      </g>
    </svg>
  );
};
export const NodeLogo = ({ colors }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="50"
      viewBox="0 0 44 50"
      fill="none"
    >
      <path
        d="M21.5905 49.4468C20.9376 49.4468 20.2929 49.2765 19.7191 48.946L13.7685 45.4222C12.8784 44.9255 13.3123 44.7491 13.6063 44.6478C14.7903 44.2341 15.0316 44.1409 16.2967 43.4211C16.4306 43.3461 16.6049 43.3725 16.7408 43.4515L21.3127 46.1663C21.3983 46.2104 21.4932 46.2334 21.5894 46.2334C21.6857 46.2334 21.7806 46.2104 21.8662 46.1663L39.6957 35.8729C39.7785 35.823 39.8471 35.7525 39.8947 35.6683C39.9422 35.5841 39.9673 35.4891 39.9674 35.3924V14.8157C39.9676 14.717 39.9424 14.62 39.8941 14.5341C39.8458 14.4481 39.776 14.3761 39.6916 14.325L21.8702 4.04172C21.7868 3.9933 21.692 3.96779 21.5955 3.96779C21.499 3.96779 21.4043 3.9933 21.3208 4.04172L3.4994 14.325C3.41422 14.3747 3.34343 14.4456 3.29401 14.531C3.2446 14.6163 3.21826 14.713 3.21758 14.8116V35.3863C3.21758 35.583 3.32504 35.7715 3.49535 35.8648L8.37748 38.685C11.0294 40.0109 12.6493 38.4498 12.6493 36.8785V16.5714C12.6482 16.5033 12.6609 16.4357 12.6865 16.3726C12.7121 16.3095 12.7502 16.2522 12.7984 16.2041C12.8467 16.1561 12.9041 16.1182 12.9674 16.0928C13.0306 16.0675 13.0982 16.0551 13.1663 16.0565H15.4249C15.7068 16.0565 15.9379 16.2795 15.9379 16.5714V36.8866C15.9379 40.4225 14.0118 42.452 10.6584 42.452C9.6264 42.452 8.81338 42.452 6.54668 41.3369L1.86932 38.6404C1.30079 38.3084 0.829088 37.8333 0.501136 37.2624C0.173185 36.6915 0.000411347 36.0447 0 35.3863V14.8116C0 13.4735 0.713667 12.2225 1.86932 11.5636L19.7191 1.26612C20.2939 0.952025 20.9385 0.787415 21.5935 0.787415C22.2485 0.787415 22.8931 0.952025 23.4679 1.26612L41.2933 11.5656C42.4449 12.2327 43.1627 13.4775 43.1627 14.8157V35.3924C43.1612 36.0497 42.9879 36.6953 42.66 37.265C42.3321 37.8348 41.861 38.3089 41.2933 38.6404L23.4679 48.9379C22.8962 49.2666 22.2479 49.4387 21.5884 49.4366V49.4468H21.5905ZM27.097 35.2687C19.2954 35.2687 17.6612 31.6882 17.6612 28.6835C17.6612 28.3997 17.8903 28.1706 18.1762 28.1706H20.4794C20.7349 28.1706 20.9478 28.3551 20.9883 28.6065C21.337 30.9543 22.3731 32.1383 27.091 32.1383C30.8479 32.1383 32.4455 31.2888 32.4455 29.2958C32.4455 28.1483 31.9893 27.2967 26.1522 26.725C21.2701 26.2424 18.2533 25.1679 18.2533 21.263C18.2533 17.6642 21.2884 15.5232 26.3712 15.5232C32.0785 15.5232 34.9089 17.5041 35.2657 21.7617C35.2719 21.8334 35.2631 21.9055 35.2399 21.9736C35.2168 22.0417 35.1797 22.1042 35.1311 22.1572C35.0825 22.2102 35.0234 22.2525 34.9576 22.2815C34.8917 22.3104 34.8206 22.3254 34.7487 22.3254H32.4313C32.3146 22.3252 32.2014 22.2851 32.1107 22.2117C32.02 22.1383 31.9571 22.036 31.9325 21.9219C31.375 19.4545 30.0267 18.6638 26.3631 18.6638C22.2615 18.6638 21.7831 20.0931 21.7831 21.1636C21.7831 22.4612 22.3447 22.8424 27.8796 23.5743C33.3599 24.3022 35.9631 25.3281 35.9631 29.1802C35.9631 33.0628 32.7212 35.291 27.0727 35.291L27.097 35.2687Z"
        fill={colors}
      />
    </svg>
  );
};
export const PythonLogo = ({ colors }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="46"
      viewBox="0 0 47 46"
      fill="none"
    >
      <path
        d="M18.7265 7.91117H21.7677M14.1647 12.4729V4.86998C14.1647 4.06341 14.4852 3.28987 15.0555 2.71954C15.6258 2.14921 16.3994 1.8288 17.2059 1.8288H29.3707C30.1772 1.8288 30.9508 2.14921 31.5211 2.71954C32.0914 3.28987 32.4119 4.06341 32.4119 4.86998V20.0759C32.4119 20.8825 32.0914 21.656 31.5211 22.2264C30.9508 22.7967 30.1772 23.1171 29.3707 23.1171H17.2059C16.3994 23.1171 15.6258 23.4375 15.0555 24.0078C14.4852 24.5782 14.1647 25.3517 14.1647 26.1583V41.3642C14.1647 42.1708 14.4852 42.9443 15.0555 43.5147C15.6258 44.085 16.3994 44.4054 17.2059 44.4054H29.3707C30.1772 44.4054 30.9508 44.085 31.5211 43.5147C32.0914 42.9443 32.4119 42.1708 32.4119 41.3642V33.7612M24.8089 13.9935H5.04119C4.23461 13.9935 3.46108 14.314 2.89074 14.8843C2.32041 15.4546 2 16.2282 2 17.0347V32.2407C2 33.0472 2.32041 33.8208 2.89074 34.3911C3.46108 34.9614 4.23461 35.2818 5.04119 35.2818H14.1647M21.7677 32.2407H41.5354C42.342 32.2407 43.1155 31.9202 43.6859 31.3499C44.2562 30.7796 44.5766 30.006 44.5766 29.1995V13.9935C44.5766 13.187 44.2562 12.4134 43.6859 11.8431C43.1155 11.2728 42.342 10.9524 41.5354 10.9524H32.4119M24.8089 38.323H27.8501"
        stroke={colors}
        stroke-width="3.04119"
      />
    </svg>
  );
};
export const ExpressLogo = ({ colors }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="29"
      viewBox="0 0 49 29"
      fill="none"
    >
      <path
        d="M48.6591 27.4751C47.951 27.7429 47.1692 27.7424 46.4614 27.4734C45.7536 27.2045 45.1687 26.6859 44.8171 26.0153L37.8223 16.3423L36.8086 14.99L28.6927 26.0275C28.3622 26.6699 27.809 27.1699 27.1366 27.4341C26.4642 27.6983 25.7186 27.7085 25.0392 27.4629L35.4968 13.4329L25.7691 0.759208C26.4685 0.507143 27.2335 0.503802 27.9351 0.749745C28.6368 0.995689 29.2322 1.47589 29.6213 2.1095L36.8715 11.9021L44.1622 2.15005C44.4953 1.51908 45.0486 1.03249 45.717 0.782785C46.3853 0.533083 47.1221 0.53768 47.7873 0.795703L44.0122 5.80556L38.8989 12.4617C38.7569 12.5884 38.6433 12.7436 38.5655 12.9173C38.4877 13.091 38.4475 13.2791 38.4475 13.4694C38.4475 13.6597 38.4877 13.8478 38.5655 14.0215C38.6433 14.1951 38.7569 14.3504 38.8989 14.477L48.6389 27.4771L48.6591 27.4751ZM0.00407925 13.2585L0.855614 9.05153C3.19531 0.732852 12.7325 -2.72803 19.2934 2.42173C23.1354 5.44062 24.0944 9.71451 23.9058 14.5318H2.26267C1.91192 23.1343 8.12001 28.3287 16.0575 25.6747C17.3443 25.2115 18.496 24.4364 19.4097 23.4188C20.3233 22.4011 20.9702 21.1728 21.2924 19.8437C21.7121 18.4934 22.4035 18.2623 23.6727 18.6516C23.4612 20.2986 22.8789 21.8763 21.9698 23.2659C21.0606 24.6555 19.8481 25.8208 18.4236 26.6742C16.0705 27.9613 13.3708 28.4715 10.7104 28.1317C8.04991 27.792 5.565 26.6197 3.61094 24.7826C1.67882 22.6079 0.5111 19.8609 0.285897 16.9607C0.285897 16.4842 0.1237 16.0382 0.0142166 15.6104C0.00434694 14.8271 -0.000383915 14.0438 2.4322e-05 13.2605L0.00407925 13.2585ZM2.28903 12.6787H21.8622C21.7405 6.44219 17.8052 2.01826 12.5561 1.97771C6.71295 1.89662 2.53233 6.22322 2.27484 12.6503L2.28903 12.6787Z"
        fill={colors}
      />
    </svg>
  );
};