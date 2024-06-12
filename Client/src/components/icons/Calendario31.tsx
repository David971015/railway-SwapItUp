import React from "react";

interface Props {
  size: number;
}

const Calendario31: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-indigo-500"
    >
      <path
        d="M22 5V11H10V22H4V7C4.00156 6.47005 4.21277 5.96224 4.58751 5.58751C4.96224 5.21277 5.47005 5.00156 6 5H22Z"
        fill="#4285F4"
      />
      <path d="M22 28V22H28L22 28Z" fill="#EA4435" />
      <path d="M22 10H28V22H22V10Z" fill="#FFBA00" />
      <path d="M22 22V28H10V22H22Z" fill="#00AC47" />
      <path
        d="M28 7V11H22V5H26C26.53 5.00156 27.0378 5.21277 27.4125 5.58751C27.7872 5.96224 27.9984 6.47005 28 7Z"
        fill="#0066DA"
      />
      <path
        d="M10 22V28H6C5.47005 27.9984 4.96224 27.7872 4.58751 27.4125C4.21277 27.0378 4.00156 26.53 4 26V22H10Z"
        fill="#188038"
      />
      <path
        d="M15.6899 17.5899C15.6899 18.4799 15.0299 19.3799 13.5399 19.3799C13.0077 19.3869 12.4831 19.2523 12.0199 18.9899L11.9399 18.9299L12.2299 18.1099L12.3599 18.1899C12.7134 18.4039 13.1169 18.5211 13.5299 18.5299C13.6899 18.5401 13.8503 18.5179 14.0016 18.4646C14.1528 18.4114 14.2917 18.3281 14.4099 18.2199C14.4947 18.135 14.5607 18.0333 14.6038 17.9214C14.6469 17.8094 14.666 17.6897 14.6599 17.5699C14.6499 16.8399 13.9799 16.5799 13.3499 16.5799H12.8099V15.7699H13.3499C13.7999 15.7699 14.4699 15.5499 14.4699 14.9499C14.4699 14.4999 14.1599 14.2399 13.6199 14.2399C13.2473 14.248 12.8854 14.3663 12.5799 14.5799L12.4399 14.6799L12.1599 13.8899L12.2299 13.8299C12.6864 13.5365 13.2174 13.3803 13.7599 13.3799C14.9499 13.3799 15.4799 14.1099 15.4799 14.8299C15.4813 15.1009 15.4059 15.3668 15.2626 15.5968C15.1193 15.8268 14.9138 16.0116 14.6699 16.1299C14.9719 16.235 15.233 16.4327 15.4162 16.6948C15.5993 16.957 15.6951 17.2702 15.6899 17.5899Z"
        fill="#4285F4"
      />
      <path
        d="M18.71 13.48V19.29H17.73V14.5L16.79 15.01L16.58 14.19L17.95 13.48H18.71Z"
        fill="#4285F4"
      />
    </svg>
  );
};

export default Calendario31;