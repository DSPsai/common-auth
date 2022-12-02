import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function DashTop() {
    const change = useLocation()
    const [data, setData] = useState({
        location: '',
        sub: "",
        promimg: '/Images/cent.png',
        promtit: '30 Free Credits',
        promsub: 'Buy more credits!!',
        noti: true,
        prof: '/Images/profile.png',
        profname: 'Jhon Doe'
    })
    const [det, setDet] = useState({
        time: '00 : 00',
        day: 'NoneDay'
    })
    const updateTitle = () => {
        let url = change.pathname
        url = url.split("/")
        let subtit = url[url.length - 2] + " / " + decodeURIComponent(url[url.length - 1])
        if (url[url.length - 1] == "Dashboard") {
            subtit = "Dashboard"
        }
        url = decodeURIComponent(url[url.length - 1])
        setData({ ...data, sub: subtit, location: url })
    }
    useEffect(() => {
        console.log(change)
        updateTitle()
        console.log(data)
    }, [change])
    useEffect(() => {
        updateTitle()

        return () => setInterval(() => {
            const d = new Date();
            let day = d.getDay()
            let hr = d.toLocaleString()
            hr = hr.split(",").pop()
            hr = hr.split(":")
            let ap = hr[2].split(" ").pop()
            hr = hr[0] + " : " + hr[1]
            let time = hr + " " + ap
            const days = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur']
            setDet({ time: time, day: days[day] + 'day' })
        }, 1000);
    }, [])
    return (
        <div className='common-dash-top-container'>
            <div className="row">
                <div className="dashtop-top-left">
                    <span className='dashtop-mainLocation'>{data.location}</span><br />
                    <span className='dashtop-subLocation'>{data.sub}</span>
                </div>
                <div className="dashtop-right">
                    <div className="row">
                        <div className="dashtop-right-left row">
                            <img src={data.promimg} />
                            <div>
                                <div>{data.promtit}</div>
                                <div className='dashtop-right-left-subtit'>{data.promsub}</div>
                            </div>
                        </div>
                        <div className=" dashtop-nofify-icon ">
                            {data.noti ? <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_131_878)">
                                    <path d="M22.5549 19.1619L20.6549 12.3259C20.0979 10.3233 18.8876 8.56422 17.2162 7.3284C15.5448 6.09259 13.5083 5.45092 11.4303 5.5054C9.35238 5.55988 7.35227 6.30738 5.74792 7.62908C4.14358 8.95078 3.02706 10.7708 2.57586 12.7999L1.10486 19.4149C0.942375 20.1459 0.946132 20.904 1.11585 21.6333C1.28557 22.3625 1.61692 23.0444 2.08544 23.6285C2.55396 24.2126 3.14768 24.684 3.82277 25.0079C4.49786 25.3318 5.23708 25.5 5.98586 25.4999H7.09986C7.32937 26.6302 7.94259 27.6464 8.8356 28.3763C9.72861 29.1062 10.8465 29.5049 11.9999 29.5049C13.1532 29.5049 14.2711 29.1062 15.1641 28.3763C16.0571 27.6464 16.6703 26.6302 16.8999 25.4999H17.7379C18.5087 25.5 19.2691 25.3218 19.9596 24.9794C20.6502 24.6369 21.2522 24.1394 21.7187 23.5258C22.1852 22.9122 22.5034 22.199 22.6487 21.442C22.7939 20.685 22.7621 19.9046 22.5559 19.1619H22.5549ZM11.9999 27.4999C11.3816 27.4974 10.7792 27.3039 10.2752 26.9458C9.77109 26.5878 9.38994 26.0828 9.18386 25.4999H14.8159C14.6098 26.0828 14.2286 26.5878 13.7246 26.9458C13.2205 27.3039 12.6181 27.4974 11.9999 27.4999V27.4999ZM20.1259 22.3149C19.8472 22.6846 19.4862 22.9842 19.0715 23.1899C18.6568 23.3956 18.1998 23.5018 17.7369 23.4999H5.98586C5.53664 23.4999 5.09318 23.3989 4.6882 23.2045C4.28322 23.0101 3.92707 22.7273 3.64602 22.3768C3.36498 22.0264 3.16622 21.6173 3.06442 21.1798C2.96262 20.7423 2.96038 20.2874 3.05786 19.8489L4.52786 13.2329C4.88221 11.6391 5.75917 10.2095 7.01932 9.17138C8.27946 8.13323 9.85048 7.54611 11.4826 7.50335C13.1148 7.46059 14.7144 7.96465 16.0272 8.9354C17.3399 9.90615 18.2905 11.2879 18.7279 12.8609L20.6279 19.6969C20.7534 20.1423 20.7734 20.6108 20.6863 21.0653C20.5991 21.5197 20.4072 21.9476 20.1259 22.3149V22.3149Z" fill="white" />
                                </g>
                                <circle cx="19" cy="6.5" r="6" fill="#FF3030" />
                                <defs>
                                    <clipPath id="clip0_131_878">
                                        <rect width="24" height="24" fill="white" transform="translate(0 5.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                                : <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5549 14.1619L20.6549 7.32593C20.0979 5.32327 18.8876 3.56422 17.2162 2.3284C15.5448 1.09259 13.5083 0.450921 11.4303 0.505401C9.35238 0.559881 7.35227 1.30738 5.74792 2.62908C4.14358 3.95078 3.02706 5.77084 2.57586 7.79993L1.10486 14.4149C0.942375 15.1459 0.946132 15.904 1.11585 16.6333C1.28557 17.3625 1.61692 18.0444 2.08544 18.6285C2.55396 19.2126 3.14768 19.684 3.82277 20.0079C4.49786 20.3318 5.23708 20.5 5.98586 20.4999H7.09986C7.32937 21.6302 7.94259 22.6464 8.8356 23.3763C9.72861 24.1062 10.8465 24.5049 11.9999 24.5049C13.1532 24.5049 14.2711 24.1062 15.1641 23.3763C16.0571 22.6464 16.6703 21.6302 16.8999 20.4999H17.7379C18.5087 20.5 19.2691 20.3218 19.9596 19.9794C20.6502 19.6369 21.2522 19.1394 21.7187 18.5258C22.1852 17.9122 22.5034 17.199 22.6487 16.442C22.7939 15.685 22.7621 14.9046 22.5559 14.1619H22.5549ZM11.9999 22.4999C11.3816 22.4974 10.7792 22.3039 10.2752 21.9458C9.77109 21.5878 9.38994 21.0828 9.18386 20.4999H14.8159C14.6098 21.0828 14.2286 21.5878 13.7246 21.9458C13.2205 22.3039 12.6181 22.4974 11.9999 22.4999ZM20.1259 17.3149C19.8472 17.6846 19.4862 17.9842 19.0715 18.1899C18.6568 18.3956 18.1998 18.5018 17.7369 18.4999H5.98586C5.53664 18.4999 5.09318 18.3989 4.6882 18.2045C4.28322 18.0101 3.92707 17.7273 3.64602 17.3768C3.36498 17.0264 3.16622 16.6173 3.06442 16.1798C2.96262 15.7423 2.96038 15.2874 3.05786 14.8489L4.52786 8.23293C4.88221 6.63914 5.75917 5.20954 7.01932 4.17138C8.27946 3.13323 9.85048 2.54611 11.4826 2.50335C13.1148 2.46059 14.7144 2.96465 16.0272 3.9354C17.3399 4.90616 18.2905 6.28788 18.7279 7.86093L20.6279 14.6969C20.7534 15.1423 20.7734 15.6108 20.6863 16.0653C20.5991 16.5197 20.4072 16.9476 20.1259 17.3149Z" fill="white" />
                                </svg>}
                        </div>
                        <div className="dashtop-prof row">
                            <div>
                                <img className='dashtop-profile-img' src={data.prof} />
                            </div>
                            <div>
                                <div>
                                    {data.profname}
                                </div>
                                <div>
                                    {det.day}&ensp;{det.time}
                                </div>
                            </div>
                            <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.59 0.590088L6 5.17009L1.41 0.590088L0 2.00009L6 8.00009L12 2.00009L10.59 0.590088Z" fill="white" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
