import React from "react";

interface Props {
  size: number;
}

const Estudiantes: React.FC<Props> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.00006 2.75C6.95537 2.75 5.31006 4.40311 5.31006 6.44C5.31006 8.42302 6.85913 10.032 8.81494 10.1189C8.93355 10.1106 9.05885 10.1102 9.17706 10.1188C11.1309 10.031 12.681 8.42308 12.6901 6.43847C12.6892 4.40339 11.0353 2.75 9.00006 2.75ZM3.81006 6.44C3.81006 3.57689 6.12474 1.25 9.00006 1.25C11.8643 1.25 14.1901 3.57579 14.1901 6.44L14.1901 6.44313C14.1784 9.24352 11.971 11.5259 9.18525 11.6196C9.15194 11.6207 9.1186 11.6196 9.08543 11.6163C9.03721 11.6115 8.96515 11.6108 8.89796 11.6169C8.86701 11.6197 8.83592 11.6206 8.80486 11.6196C6.01965 11.526 3.81006 9.24337 3.81006 6.44Z"
        fill="#292D32"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.6599 4C15.6599 3.58579 15.9956 3.25 16.4099 3.25C18.7655 3.25 20.6599 5.15718 20.6599 7.5C20.6599 9.79545 18.8388 11.6645 16.5679 11.7495C16.5275 11.751 16.487 11.7492 16.4468 11.7442C16.4318 11.7423 16.4013 11.7411 16.3627 11.7454C15.951 11.7912 15.5802 11.4945 15.5344 11.0828C15.4887 10.6711 15.7853 10.3003 16.197 10.2546C16.3148 10.2415 16.4382 10.2385 16.5599 10.2483C18.0066 10.169 19.1599 8.9683 19.1599 7.5C19.1599 5.98282 17.9342 4.75 16.4099 4.75C15.9956 4.75 15.6599 4.41421 15.6599 4Z"
        fill="#292D32"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.17247 12.4375C11.1007 12.4375 13.067 12.9214 14.5865 13.9363C15.9524 14.8454 16.735 16.1198 16.735 17.4913C16.735 18.8626 15.9525 20.1393 14.5872 21.0532L14.587 21.0533C13.0628 22.0732 11.0941 22.56 9.16497 22.56C7.23626 22.56 5.26788 22.0734 3.74379 21.0539C2.37768 20.1448 1.59497 18.8703 1.59497 17.4987C1.59497 16.1274 2.37741 14.8507 3.74276 13.9368L3.74551 13.9349L3.74551 13.9349C5.27395 12.9215 7.24403 12.4375 9.17247 12.4375ZM4.5758 15.1842C3.52216 15.89 3.09497 16.7429 3.09497 17.4987C3.09497 18.2544 3.52198 19.1047 4.5754 19.8056L4.57704 19.8067C5.80283 20.6268 7.46405 21.06 9.16497 21.06C10.8658 21.06 12.527 20.6269 13.7528 19.8068C14.8074 19.1007 15.235 18.2474 15.235 17.4913C15.235 16.7355 14.808 15.8853 13.7545 15.1844L13.7534 15.1837C12.533 14.3686 10.8743 13.9375 9.17247 13.9375C7.47154 13.9375 5.80724 14.3682 4.5758 15.1842Z"
        fill="#292D32"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.6383 13.8351C17.7294 13.431 18.1308 13.1773 18.5349 13.2683C19.3243 13.4462 20.099 13.7636 20.7526 14.2619C21.6937 14.9688 22.22 15.954 22.22 16.995C22.22 18.0357 21.694 19.0206 20.7534 19.7274C20.092 20.2344 19.3053 20.565 18.493 20.7342C18.0875 20.8187 17.6902 20.5585 17.6058 20.153C17.5213 19.7475 17.7815 19.3502 18.187 19.2658C18.8133 19.1353 19.3854 18.8867 19.8432 18.5351L19.85 18.53L19.85 18.53C20.4673 18.067 20.72 17.503 20.72 16.995C20.72 16.487 20.4673 15.923 19.85 15.46L19.8448 15.4561L19.8448 15.4561C19.3989 15.1156 18.8347 14.8735 18.2051 14.7316C17.801 14.6406 17.5473 14.2392 17.6383 13.8351Z"
        fill="#292D32"
      />
    </svg>
  );
};

export default Estudiantes;