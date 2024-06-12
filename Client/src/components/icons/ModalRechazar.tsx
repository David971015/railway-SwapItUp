import React from "react";

interface Props {
  size: number;
}

const ModalRechazar: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 125 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.0416 13.1581C59.6066 10.1097 65.4449 10.1097 69.0616 13.1581L77.225 20.1853C78.775 21.5286 81.6682 22.6135 83.7349 22.6135H92.5183C97.9949 22.6135 102.49 27.1081 102.49 32.5848V41.3685C102.49 43.3835 103.575 46.3286 104.918 47.8786L111.945 56.0417C114.993 59.6067 114.993 65.4451 111.945 69.0618L104.918 77.2249C103.575 78.7749 102.49 81.6683 102.49 83.7349V92.5186C102.49 97.9953 97.9949 102.49 92.5183 102.49H83.7349C81.7199 102.49 78.775 103.575 77.225 104.918L69.0616 111.945C65.4966 114.993 59.6583 114.993 56.0416 111.945L47.8784 104.918C46.3284 103.575 43.435 102.49 41.3683 102.49H32.4299C26.9532 102.49 22.4583 97.9953 22.4583 92.5186V83.6832C22.4583 81.6682 21.3733 78.7749 20.0817 77.2249L13.1066 69.01C10.11 65.445 10.11 59.6584 13.1066 56.0934L20.0817 47.8786C21.3733 46.3286 22.4583 43.4352 22.4583 41.4202V32.5848C22.4583 27.1081 26.9532 22.6135 32.4299 22.6135H41.3683C43.3833 22.6135 46.3284 21.5286 47.8784 20.1853L56.0416 13.1581Z"
        fill="white"
        stroke="#292D32"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M73.3668 50.1785L65.8752 44.3919C64.8935 43.4102 62.7235 42.9451 61.2768 42.9451H52.1319C49.2385 42.9451 46.0869 45.115 45.3635 48.0083L39.5769 65.6785C38.3886 69.0369 40.5585 71.9817 44.1751 71.9817H53.8368C55.2835 71.9817 56.4718 73.1697 56.2651 74.8747L55.0769 82.6247C54.6119 84.7947 56.0585 87.2232 58.2285 87.9465C60.1402 88.6699 62.5685 87.6884 63.5501 86.2418L73.4702 71.5169"
        stroke="#292D32"
        stroke-width="3"
        stroke-miterlimit="10"
      />
      <path
        d="M85.6121 50.1788V73.8419C85.6121 77.2519 84.1654 78.4403 80.7554 78.4403H78.327C74.9687 78.4403 73.4704 77.2519 73.4704 73.8419V50.1788C73.4704 46.8205 74.917 45.5804 78.327 45.5804H80.7554C84.1654 45.5804 85.6121 46.7688 85.6121 50.1788Z"
        fill="#DAD5F8"
        stroke="#292D32"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ModalRechazar;
