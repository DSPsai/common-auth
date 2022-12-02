import { ShoppingBagOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Sidemenu.css'
import { useLocation } from 'react-router-dom'
export default function Sidemenu() {
    const change = useLocation()
    const [data, setData] = useState([
        {
            icon: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.115 1.19425C10.809 0.918784 10.4118 0.766357 10 0.766357C9.58824 0.766357 9.19105 0.918784 8.885 1.19425L0 9.19092V17.8576C0 18.5648 0.280952 19.2431 0.781049 19.7432C1.28115 20.2433 1.95942 20.5243 2.66667 20.5243H17.3333C18.0406 20.5243 18.7189 20.2433 19.219 19.7432C19.719 19.2431 20 18.5648 20 17.8576V9.19092L11.115 1.19425ZM12.5 18.8551H7.5V14.6668C7.5 14.0037 7.76339 13.3678 8.23223 12.899C8.70107 12.4301 9.33696 12.1668 10 12.1668C10.663 12.1668 11.2989 12.4301 11.7678 12.899C12.2366 13.3678 12.5 14.0037 12.5 14.6668V18.8551ZM18.3333 17.8551C18.3333 18.1203 18.228 18.3747 18.0404 18.5622C17.8529 18.7497 17.5985 18.8551 17.3333 18.8551H14.1667V14.6668C14.1667 13.5617 13.7277 12.5019 12.9463 11.7205C12.1649 10.9391 11.1051 10.5001 10 10.5001C8.89493 10.5001 7.83512 10.9391 7.05372 11.7205C6.27232 12.5019 5.83333 13.5617 5.83333 14.6668V18.8551H2.66667C2.40145 18.8551 2.1471 18.7497 1.95956 18.5622C1.77202 18.3747 1.66667 18.1203 1.66667 17.8551V9.93259L10 2.43259L18.3333 9.93259V17.8551Z" fill="#323232" />
            </svg>
            , show: false, url: false, onsub: false, name: 'Dashboard',
            sub: []
        }, {
            icon: <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66667 13.8334H12.3333V15.7501H4.66667V13.8334ZM4.66667 10.0001H12.3333V11.9167H4.66667V10.0001ZM10.4167 0.416748H2.75C1.69584 0.416748 0.833336 1.27925 0.833336 2.33342V17.6668C0.833336 18.7209 1.68625 19.5834 2.74042 19.5834H14.25C15.3042 19.5834 16.1667 18.7209 16.1667 17.6668V6.16675L10.4167 0.416748ZM14.25 17.6668H2.75V2.33342H9.45833V7.12508H14.25V17.6668Z" fill="#323232" />
            </svg>
            , show: false, url: false, onsub: false, name: 'Projects',
            sub: [
                {
                    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5833 13.7501H17.4167V6.41675C17.4167 5.40841 16.5917 4.58341 15.5833 4.58341H8.25V6.41675H15.5833V13.7501ZM6.41667 15.5834V0.916748H4.58333V4.58341H0.916668V6.41675H4.58333V15.5834C4.58333 16.5917 5.40833 17.4167 6.41667 17.4167H15.5833V21.0834H17.4167V17.4167H21.0833V15.5834H6.41667Z" fill="#323232" />
                    </svg>,
                    name: 'Defaults', url: false, onsub: false,
                }
            ]
        }, {
            icon: <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11.5" r="10" stroke="#323232" stroke-width="2" />
                <path d="M10.4425 17.6818V5.86364H11.1996V17.6818H10.4425ZM12.4506 9.76456C12.4137 9.39216 12.2552 9.10286 11.9751 8.89666C11.6951 8.69046 11.315 8.58736 10.8349 8.58736C10.5086 8.58736 10.2332 8.63352 10.0085 8.72585C9.78385 8.8151 9.61151 8.93975 9.49148 9.09979C9.37453 9.25982 9.31605 9.44141 9.31605 9.64453C9.3099 9.8138 9.34529 9.96153 9.42223 10.0877C9.50225 10.2139 9.61151 10.3232 9.75 10.4155C9.88849 10.5047 10.0485 10.5832 10.2301 10.6509C10.4117 10.7156 10.6056 10.771 10.8118 10.8171L11.6612 11.0202C12.0736 11.1126 12.4522 11.2357 12.7969 11.3896C13.1416 11.5434 13.4401 11.7327 13.6925 11.9574C13.9448 12.1821 14.1403 12.4467 14.2788 12.7514C14.4203 13.0561 14.4927 13.4054 14.4957 13.7994C14.4927 14.378 14.3449 14.8796 14.0526 15.3043C13.7633 15.726 13.3447 16.0537 12.7969 16.2876C12.2521 16.5185 11.5951 16.6339 10.8256 16.6339C10.0624 16.6339 9.39761 16.5169 8.83132 16.283C8.26811 16.0491 7.82801 15.7029 7.51101 15.2443C7.19709 14.7827 7.03243 14.2118 7.01705 13.5316H8.95135C8.97289 13.8486 9.06368 14.1133 9.22372 14.3256C9.38684 14.5349 9.60381 14.6934 9.87464 14.8011C10.1486 14.9058 10.4579 14.9581 10.8026 14.9581C11.1411 14.9581 11.435 14.9089 11.6843 14.8104C11.9367 14.7119 12.1321 14.5749 12.2706 14.3995C12.4091 14.2241 12.4783 14.0225 12.4783 13.7947C12.4783 13.5824 12.4152 13.4039 12.2891 13.2592C12.166 13.1146 11.9844 12.9915 11.7443 12.8899C11.5073 12.7884 11.2165 12.696 10.8718 12.6129L9.84233 12.3544C9.04522 12.1605 8.41584 11.8574 7.95419 11.445C7.49254 11.0326 7.26326 10.477 7.26634 9.77841C7.26326 9.20597 7.4156 8.70585 7.72337 8.27805C8.03421 7.85026 8.46046 7.51634 9.00213 7.27628C9.5438 7.03622 10.1593 6.91619 10.8487 6.91619C11.5504 6.91619 12.1629 7.03622 12.6861 7.27628C13.2124 7.51634 13.6217 7.85026 13.9141 8.27805C14.2064 8.70585 14.3572 9.20135 14.3665 9.76456H12.4506Z" fill="#323232" />
            </svg>
            , show: false, url: false, onsub: false, name: 'My Plans',
            sub: [],
            note: '40% OFF',
            color: 'rgba(14, 201, 112, 1)',
            bgcolor: 'rgba(14, 201, 112, .1)'
        }, {
            icon: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13.8333C9.34073 13.8333 8.69626 13.6378 8.1481 13.2716C7.59994 12.9053 7.17269 12.3847 6.9204 11.7756C6.66811 11.1665 6.6021 10.4963 6.73072 9.8497C6.85933 9.2031 7.1768 8.60915 7.64298 8.14298C8.10915 7.6768 8.7031 7.35933 9.3497 7.23072C9.9963 7.1021 10.6665 7.16811 11.2756 7.4204C11.8847 7.6727 12.4053 8.09994 12.7716 8.6481C13.1378 9.19627 13.3333 9.84073 13.3333 10.5C13.3333 11.3841 12.9821 12.2319 12.357 12.857C11.7319 13.4821 10.8841 13.8333 10 13.8333ZM10 8.83334C9.67036 8.83334 9.34813 8.93108 9.07405 9.11422C8.79997 9.29736 8.58635 9.55765 8.4602 9.8622C8.33405 10.1667 8.30105 10.5019 8.36536 10.8252C8.42967 11.1485 8.5884 11.4454 8.82149 11.6785C9.05458 11.9116 9.35155 12.0703 9.67485 12.1346C9.99815 12.199 10.3333 12.1659 10.6378 12.0398C10.9423 11.9137 11.2026 11.7 11.3858 11.426C11.5689 11.1519 11.6667 10.8296 11.6667 10.5C11.6667 10.058 11.4911 9.63405 11.1785 9.32149C10.866 9.00893 10.442 8.83334 10 8.83334ZM15 19.6667C15 18.3406 14.4732 17.0688 13.5355 16.1311C12.5979 15.1935 11.3261 14.6667 10 14.6667C8.67392 14.6667 7.40215 15.1935 6.46447 16.1311C5.52678 17.0688 5 18.3406 5 19.6667C5 19.8877 5.0878 20.0996 5.24408 20.2559C5.40036 20.4122 5.61232 20.5 5.83333 20.5C6.05435 20.5 6.26631 20.4122 6.42259 20.2559C6.57887 20.0996 6.66667 19.8877 6.66667 19.6667C6.66667 18.7826 7.01786 17.9348 7.64298 17.3096C8.2681 16.6845 9.11594 16.3333 10 16.3333C10.8841 16.3333 11.7319 16.6845 12.357 17.3096C12.9821 17.9348 13.3333 18.7826 13.3333 19.6667C13.3333 19.8877 13.4211 20.0996 13.5774 20.2559C13.7337 20.4122 13.9457 20.5 14.1667 20.5C14.3877 20.5 14.5996 20.4122 14.7559 20.2559C14.9122 20.0996 15 19.8877 15 19.6667ZM15 7.16667C14.3407 7.16667 13.6963 6.97117 13.1481 6.6049C12.5999 6.23863 12.1727 5.71803 11.9204 5.10895C11.6681 4.49986 11.6021 3.82964 11.7307 3.18303C11.8593 2.53643 12.1768 1.94249 12.643 1.47631C13.1092 1.01014 13.7031 0.692668 14.3497 0.564051C14.9963 0.435433 15.6665 0.501444 16.2756 0.753736C16.8847 1.00603 17.4053 1.43327 17.7716 1.98143C18.1378 2.5296 18.3333 3.17406 18.3333 3.83334C18.3333 4.71739 17.9821 5.56524 17.357 6.19036C16.7319 6.81548 15.8841 7.16667 15 7.16667ZM15 2.16667C14.6704 2.16667 14.3481 2.26442 14.074 2.44755C13.8 2.63069 13.5863 2.89099 13.4602 3.19553C13.3341 3.50007 13.301 3.83518 13.3654 4.15849C13.4297 4.48179 13.5884 4.77876 13.8215 5.01185C14.0546 5.24493 14.3515 5.40367 14.6748 5.46798C14.9982 5.53229 15.3333 5.49928 15.6378 5.37313C15.9423 5.24699 16.2026 5.03337 16.3858 4.75929C16.5689 4.4852 16.6667 4.16297 16.6667 3.83334C16.6667 3.39131 16.4911 2.96738 16.1785 2.65482C15.8659 2.34226 15.442 2.16667 15 2.16667ZM20 13C19.9987 11.6743 19.4715 10.4033 18.5341 9.46593C17.5967 8.52853 16.3257 8.00133 15 8C14.779 8 14.567 8.0878 14.4107 8.24408C14.2545 8.40036 14.1667 8.61232 14.1667 8.83334C14.1667 9.05435 14.2545 9.26631 14.4107 9.42259C14.567 9.57887 14.779 9.66667 15 9.66667C15.8841 9.66667 16.7319 10.0179 17.357 10.643C17.9821 11.2681 18.3333 12.1159 18.3333 13C18.3333 13.221 18.4211 13.433 18.5774 13.5893C18.7337 13.7455 18.9457 13.8333 19.1667 13.8333C19.3877 13.8333 19.5996 13.7455 19.7559 13.5893C19.9122 13.433 20 13.221 20 13ZM5 7.16667C4.34073 7.16667 3.69626 6.97117 3.1481 6.6049C2.59994 6.23863 2.17269 5.71803 1.9204 5.10895C1.66811 4.49986 1.6021 3.82964 1.73072 3.18303C1.85933 2.53643 2.1768 1.94249 2.64298 1.47631C3.10915 1.01014 3.7031 0.692668 4.3497 0.564051C4.9963 0.435433 5.66652 0.501444 6.27561 0.753736C6.8847 1.00603 7.40529 1.43327 7.77156 1.98143C8.13784 2.5296 8.33333 3.17406 8.33333 3.83334C8.33333 4.71739 7.98214 5.56524 7.35702 6.19036C6.7319 6.81548 5.88405 7.16667 5 7.16667V7.16667ZM5 2.16667C4.67036 2.16667 4.34813 2.26442 4.07405 2.44755C3.79997 2.63069 3.58635 2.89099 3.4602 3.19553C3.33405 3.50007 3.30105 3.83518 3.36536 4.15849C3.42967 4.48179 3.5884 4.77876 3.82149 5.01185C4.05458 5.24493 4.35155 5.40367 4.67485 5.46798C4.99815 5.53229 5.33326 5.49928 5.63781 5.37313C5.94235 5.24699 6.20265 5.03337 6.38578 4.75929C6.56892 4.4852 6.66667 4.16297 6.66667 3.83334C6.66667 3.39131 6.49107 2.96738 6.17851 2.65482C5.86595 2.34226 5.44203 2.16667 5 2.16667ZM1.66667 13C1.66667 12.1159 2.01786 11.2681 2.64298 10.643C3.2681 10.0179 4.11594 9.66667 5 9.66667C5.22101 9.66667 5.43298 9.57887 5.58926 9.42259C5.74554 9.26631 5.83333 9.05435 5.83333 8.83334C5.83333 8.61232 5.74554 8.40036 5.58926 8.24408C5.43298 8.0878 5.22101 8 5 8C3.67432 8.00133 2.40332 8.52853 1.46593 9.46593C0.528533 10.4033 0.00132369 11.6743 0 13C0 13.221 0.0877974 13.433 0.244078 13.5893C0.400358 13.7455 0.61232 13.8333 0.833333 13.8333C1.05435 13.8333 1.26631 13.7455 1.42259 13.5893C1.57887 13.433 1.66667 13.221 1.66667 13Z" fill="#323232" />
            </svg>
            , show: false, url: false, onsub: false, name: 'My Teams',
            sub: []
        }, {
            icon: <ShoppingBagOutlined />
            , show: false, url: false, onsub: false, name: 'Pricing',
            sub: []
        }, {
            icon: <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.16666 9.66619C6.43731 9.66619 5.73784 9.95592 5.22212 10.4716C4.70639 10.9874 4.41666 11.6868 4.41666 12.4162C4.41666 13.1455 4.70639 13.845 5.22212 14.3607C5.73784 14.8765 6.43731 15.1662 7.16666 15.1662H10.8333C11.5627 15.1662 12.2621 14.8765 12.7779 14.3607C13.2936 13.845 13.5833 13.1455 13.5833 12.4162C13.5833 11.6868 13.2936 10.9874 12.7779 10.4716C12.2621 9.95592 11.5627 9.66619 10.8333 9.66619H7.16666ZM11.75 12.4162C11.75 12.6593 11.6534 12.8925 11.4815 13.0644C11.3096 13.2363 11.0764 13.3329 10.8333 13.3329H7.16666C6.92354 13.3329 6.69039 13.2363 6.51848 13.0644C6.34657 12.8925 6.24999 12.6593 6.24999 12.4162C6.24999 12.1731 6.34657 11.9399 6.51848 11.768C6.69039 11.5961 6.92354 11.4995 7.16666 11.4995H10.8333C11.0764 11.4995 11.3096 11.5961 11.4815 11.768C11.6534 11.9399 11.75 12.1731 11.75 12.4162ZM13.5833 17.9162C13.5833 18.1593 13.4867 18.3925 13.3148 18.5644C13.1429 18.7363 12.9098 18.8329 12.6667 18.8329H5.33333C5.09021 18.8329 4.85705 18.7363 4.68514 18.5644C4.51324 18.3925 4.41666 18.1593 4.41666 17.9162C4.41666 17.6731 4.51324 17.4399 4.68514 17.268C4.85705 17.0961 5.09021 16.9995 5.33333 16.9995H12.6667C12.9098 16.9995 13.1429 17.0961 13.3148 17.268C13.4867 17.4399 13.5833 17.6731 13.5833 17.9162ZM15.908 3.36044L14.3882 1.84244C13.9636 1.41551 13.4586 1.07699 12.9024 0.846482C12.3462 0.615973 11.7498 0.498047 11.1477 0.499525H5.33333C4.1182 0.500981 2.95325 0.984334 2.09403 1.84356C1.2348 2.70279 0.751448 3.86773 0.749992 5.08286V17.9162C0.751448 19.1313 1.2348 20.2963 2.09403 21.1555C2.95325 22.0147 4.1182 22.4981 5.33333 22.4995H12.6667C13.8818 22.4981 15.0467 22.0147 15.906 21.1555C16.7652 20.2963 17.2485 19.1313 17.25 17.9162V6.60178C17.2517 5.9996 17.134 5.40307 16.9036 4.8467C16.6733 4.29032 16.3349 3.78516 15.908 3.36044ZM14.6118 4.65661C14.7408 4.78717 14.8569 4.92992 14.9583 5.08286H12.6667V2.79119C12.8198 2.89159 12.9624 3.00739 13.092 3.13678L14.6118 4.65661ZM15.4167 17.9162C15.4167 18.6455 15.1269 19.345 14.6112 19.8607C14.0955 20.3765 13.396 20.6662 12.6667 20.6662H5.33333C4.60398 20.6662 3.90451 20.3765 3.38878 19.8607C2.87306 19.345 2.58333 18.6455 2.58333 17.9162V5.08286C2.58333 4.35351 2.87306 3.65404 3.38878 3.13832C3.90451 2.62259 4.60398 2.33286 5.33333 2.33286H10.8333V5.08286C10.8333 5.56909 11.0265 6.0354 11.3703 6.37922C11.7141 6.72304 12.1804 6.91619 12.6667 6.91619H15.4167V17.9162Z" fill="#323232" />
            </svg>
            , show: false, url: false, onsub: false, name: 'Invoice',
            sub: []
        }, {
            icon: <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4167 2.25033H11.4327C11.2909 2.25126 11.1508 2.21991 11.0229 2.15866L8.12991 0.706659C7.74802 0.516492 7.32728 0.417346 6.90066 0.416992H4.58333C3.3682 0.418448 2.20325 0.901801 1.34403 1.76103C0.484801 2.62025 0.00144791 3.7852 -7.62939e-06 5.00033L-7.62939e-06 16.0003C0.00144791 17.2155 0.484801 18.3804 1.34403 19.2396C2.20325 20.0989 3.3682 20.5822 4.58333 20.5837H17.4167C18.6318 20.5822 19.7967 20.0989 20.656 19.2396C21.5152 18.3804 21.9985 17.2155 22 16.0003V6.83366C21.9985 5.61853 21.5152 4.45359 20.656 3.59436C19.7967 2.73513 18.6318 2.25178 17.4167 2.25033ZM4.58333 2.25033H6.90066C7.04243 2.24939 7.18255 2.28074 7.31041 2.34199L10.2034 3.78941C10.5849 3.98116 11.0057 4.08188 11.4327 4.08366H17.4167C17.9649 4.08455 18.5003 4.24927 18.9542 4.55667C19.4081 4.86407 19.7598 5.30011 19.9641 5.80883L1.83333 5.91149V5.00033C1.83333 4.27098 2.12306 3.57151 2.63878 3.05578C3.15451 2.54006 3.85398 2.25033 4.58333 2.25033ZM17.4167 18.7503H4.58333C3.85398 18.7503 3.15451 18.4606 2.63878 17.9449C2.12306 17.4291 1.83333 16.7297 1.83333 16.0003V7.74483L20.1667 7.64124V16.0003C20.1667 16.7297 19.8769 17.4291 19.3612 17.9449C18.8455 18.4606 18.146 18.7503 17.4167 18.7503Z" fill="#323232" />
            </svg>
            , show: false, url: false, onsub: false, name: 'Drive',
            sub: []
        },
    ])
    // Highlight the current nav item respective to url
    const updateActive = () => {
        let url = window.location.href
        url = url.split("/").pop()
        url = decodeURIComponent(url)
        let tdata = []
        for (let i of data) {
            let ttdata = []
            let bol = false
            for (let j of i.sub) {
                if (url == j.name) {
                    bol = true
                    j.show = true;
                    j.url = true
                } else {
                    j.show = false;
                    j.url = false
                }
                ttdata.push(j)
            }
            if (bol) {
                i.show = true
            } else {
                i.show = false
            }
            if (url == i.name) {
                i.url = true
            } else {
                i.url = false
            }
            i.sub = ttdata
            tdata.push(i)
        }
        setData([...tdata])
    }
    useEffect(() => {
        updateActive()
        console.log(data)
    }, [])
    useEffect(() => {
        console.log(change)
        updateActive()
    }, [change])

    const go = useNavigate()

    return (
        <div className='Sidemenu-container'>
            <div className="sidemenu-logo">
                <div style={{
                    boxShadow: 'none'
                }} className="authtop">
                    <img onClick={() => { go("/") }} src="/Images/photoque-logo.png" /><br />
                    <div style={{
                        height: '2px',
                        backgroundColor: 'grey'
                    }}></div>
                </div>
            </div>
            <div className="sidemenu-item-container">
                {data.map((item, ind) => {
                    let cls = `sidemenu-item-main ${item.url ? "sidemenu-active-item" : ""}`
                    return <div
                        onMouseLeave={() => {
                            let tdata = item
                            let tbol1 = false
                            if (tdata.sub.length > 0) {
                                for (let i of tdata.sub) {
                                    if (i.url)
                                        tbol1 = true
                                }
                            }
                            if (!tbol1)
                                tdata.show = false
                            data.splice(ind, 1, tdata)
                            setData([...data])
                        }} onClick={() => {
                            !item.oncard && go("/Dashboard/" + item.name)
                        }} className="sidemenu-item">
                        <div className={cls}>
                            {item.icon}
                            <span className='sidemenu-item-title'>{item.name}</span>
                            {item.note && <span style={{
                                color: item.color, backgroundColor: item.bgcolor
                            }} className="sidemenu-item-notify">
                                {item.note}
                            </span>}
                            {item.sub.length > 0 && <span
                                onMouseEnter={() => {
                                    let tdata = item
                                    tdata.show = true
                                    data.splice(ind, 1, tdata)
                                    setData([...data])
                                }} className='sidemenu-item-end'>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1.49984L10.59 0.0898438L6 4.66984L1.41 0.0898438L0 1.49984L6 7.49984L12 1.49984Z" fill="#5E75FB" />
                                </svg>
                            </span>}
                        </div>
                        <div
                            style={{ display: item.show || item.url ? "flex" : "none" }}
                            onMouseEnter={() => {
                                let tdata = item
                                tdata.oncard = true
                                data.splice(ind, 1, tdata)
                                setData([...data])
                            }}
                            onMouseLeave={() => {
                                let tdata = item
                                tdata.oncard = false
                                data.splice(ind, 1, tdata)
                                setData([...data])
                            }}
                            className="sidemenu-subitems">
                            {item.sub.map(sub => {
                                let icls = `sidemenu-item-main ${sub.url ? "sidemenu-active-item" : ""}`
                                return <div onClick={() => {
                                    go("/Dashboard/" + item.name + "/" + sub.name)
                                }} className={icls}>
                                    {sub.icon}
                                    <span className='sidemenu-item-title'>{sub.name}</span>
                                </div>
                            })}
                        </div>
                    </div>
                })}
            </div>
            <div className="sidemenu-footer">
                <div className="sidemenufooter-item"></div>
                <div className="sidemenufooter-item"></div>
            </div>
        </div>
    )
}
