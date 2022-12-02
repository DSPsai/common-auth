import { Box } from '@mui/material'
import React, { useState } from 'react'
import Dashtopcard from '../Components/Dashtopcard'

export default function DashboardPage() {
    const [topcards, setTopCards] = useState([
        {
            icon: <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.1" cx="20" cy="20.5" r="20" fill="#6B33FF" />
                <g clip-path="url(#clip0_12_1900)">
                    <path d="M16.6666 24.3333H23.3333V26H16.6666V24.3333ZM16.6666 21H23.3333V22.6667H16.6666V21ZM21.6666 12.6667H14.9999C14.0833 12.6667 13.3333 13.4167 13.3333 14.3333V27.6667C13.3333 28.5833 14.0749 29.3333 14.9916 29.3333H24.9999C25.9166 29.3333 26.6666 28.5833 26.6666 27.6667V17.6667L21.6666 12.6667ZM24.9999 27.6667H14.9999V14.3333H20.8333V18.5H24.9999V27.6667Z" fill="#5E75FB" />
                </g>
                <defs>
                    <clipPath id="clip0_12_1900">
                        <rect width="20" height="20" fill="white" transform="translate(10 11)" />
                    </clipPath>
                </defs>
            </svg>
            ,
            title: "Total Orders",
            highlight: "2540"
        }, {
            icon: <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.1" cx="20" cy="20.5" r="20" fill="#6B33FF" />
                <g clip-path="url(#clip0_12_1900)">
                    <path d="M16.6666 24.3333H23.3333V26H16.6666V24.3333ZM16.6666 21H23.3333V22.6667H16.6666V21ZM21.6666 12.6667H14.9999C14.0833 12.6667 13.3333 13.4167 13.3333 14.3333V27.6667C13.3333 28.5833 14.0749 29.3333 14.9916 29.3333H24.9999C25.9166 29.3333 26.6666 28.5833 26.6666 27.6667V17.6667L21.6666 12.6667ZM24.9999 27.6667H14.9999V14.3333H20.8333V18.5H24.9999V27.6667Z" fill="#5E75FB" />
                </g>
                <defs>
                    <clipPath id="clip0_12_1900">
                        <rect width="20" height="20" fill="white" transform="translate(10 11)" />
                    </clipPath>
                </defs>
            </svg>
            ,
            title: "Orders This Month",
            highlight: "250"
        }, {
            icon: <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.1" cx="20" cy="20.5" r="20" fill="#6B33FF" />
                <g clip-path="url(#clip0_12_1900)">
                    <path d="M16.6666 24.3333H23.3333V26H16.6666V24.3333ZM16.6666 21H23.3333V22.6667H16.6666V21ZM21.6666 12.6667H14.9999C14.0833 12.6667 13.3333 13.4167 13.3333 14.3333V27.6667C13.3333 28.5833 14.0749 29.3333 14.9916 29.3333H24.9999C25.9166 29.3333 26.6666 28.5833 26.6666 27.6667V17.6667L21.6666 12.6667ZM24.9999 27.6667H14.9999V14.3333H20.8333V18.5H24.9999V27.6667Z" fill="#5E75FB" />
                </g>
                <defs>
                    <clipPath id="clip0_12_1900">
                        <rect width="20" height="20" fill="white" transform="translate(10 11)" />
                    </clipPath>
                </defs>
            </svg>
            ,
            title: "Outstanding Orders",
            highlight: "1920"
        }, {
            icon: <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.1" cx="20" cy="20.5" r="20" fill="#6B33FF" />
                <g clip-path="url(#clip0_12_1900)">
                    <path d="M16.6666 24.3333H23.3333V26H16.6666V24.3333ZM16.6666 21H23.3333V22.6667H16.6666V21ZM21.6666 12.6667H14.9999C14.0833 12.6667 13.3333 13.4167 13.3333 14.3333V27.6667C13.3333 28.5833 14.0749 29.3333 14.9916 29.3333H24.9999C25.9166 29.3333 26.6666 28.5833 26.6666 27.6667V17.6667L21.6666 12.6667ZM24.9999 27.6667H14.9999V14.3333H20.8333V18.5H24.9999V27.6667Z" fill="#5E75FB" />
                </g>
                <defs>
                    <clipPath id="clip0_12_1900">
                        <rect width="20" height="20" fill="white" transform="translate(10 11)" />
                    </clipPath>
                </defs>
            </svg>
            ,
            title: "Overdue Orders",
            highlight: "540"
        },
    ])
    const [row2left, setRow2left] = useState({
        icon: <img src="/Images/dashboard-crown.png"></img>,
        title: 'Upgrade to Professional Plan',
        price: '$200'
    })
    const styles = {
        row2card11: {
            backgroundColor: "white",
            width: 'calc(100%) !important',
            // p: '3vh'
        },
        commonText: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'var(--bold)',
            mt: '10px',
            mb: '15px'
        }
    }
    const professionalPlan = [
        '3000 Credits',
        '8 hours revisions',
        'Video Editing',
        'Free 18 hours turnaround',
        'Priority Support',
        '3000 Credits',
        '8 hours revisions',
        'Free 18 hours turnaround'
    ]
    const ticksvg = <svg width="20px" height="16px" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00508 0.0167965C3.86511 0.0312478 0.516856 3.40296 0.531307 7.54293C0.545758 11.6829 3.91747 15.0312 8.05744 15.0167C12.1974 15.0023 15.5457 11.6305 15.5312 7.49057C15.5168 3.3506 12.1451 0.0023452 8.00508 0.0167965ZM6.54436 11.272L2.78129 7.53508L3.8351 6.47389L6.53695 9.14948L12.2095 3.43714L13.2708 4.49844L6.54436 11.272Z" fill="#5E75FB" />
    </svg>
    const costs=[
        {price:'$259.24',perc:'24',positive:true}
    ]
    return (
        <div className=""><div className='dash-down-row1'>{topcards.map((card, ind) => {
            return <><Dashtopcard data={card} />{ind != topcards.length - 1 && <div style={{ opacity: '0.1', padding: '1.5px', backgroundColor: 'black', margin: "20px 0", marginLeft: '-4px' }}></div>
            }</>
        })}</div >
            <Box className="dash-down-row2">
                <Box sx={{ mr: '1vw' }}>
                    <h2 className='dash-sidehead'>Plan Subscriptions</h2>
                    <Box sx={styles.row2card11} className='row'>
                        <Box sx={{ width: 'calc(100% - 20px)', padding: '20px' }}>
                            <div>
                                {row2left.icon}
                                <Box sx={styles.commonText} >{row2left.title}</Box>
                                <Box sx={{ fontSize: '35px', fontWeight: 'bold' }}>{row2left.price}</Box>
                            </div>
                            <Box sx={{
                                m: 0,
                                mt: '40px'
                            }} className='primary_button'>
                                Upgrade Now
                            </Box>
                        </Box>
                        <Box sx={{ width: 'calc(100% - 20px)', p: '20px' }}>
                            <Box sx={styles.commonText} >You’re Currently Subscribed to a Starter Plan</Box>
                            <Box sx={{ ...styles.commonText, fontSize: '14px' }} >Professional Plan includes:-</Box>
                            <Box className='row'>
                                <Box>
                                    {professionalPlan.slice(0, 5).map(item => <Box className='flexcenter' sx={{ fontSize: '12px', m: 0.5, color: 'var(--highlight-color)', justifyContent: 'initial' }} ><Box className='row'>{ticksvg}&ensp;<div>{item}</div></Box></Box>)}
                                </Box>
                                <Box>
                                    {professionalPlan.slice(5).map(item => <Box className='flexcenter' sx={{ fontSize: '12px', m: 0.5, color: 'var(--highlight-color)', justifyContent: 'initial' }} ><Box className='row'>{ticksvg}&ensp;<div>{item}</div></Box></Box>)}
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{ ml: '1vw', width: 'calc(100% - 1vw)' }}>
                    <h2 className='dash-sidehead'>Costs</h2>
                    <Box sx={{ ...styles.row2card11, width: 'calc(100% - 40px)' }} className="dash-down-row2-left-card">
                        <div className="dash-down-row2-left-card-left">
                            {row2left.icon}
                            <div className="dash-down-row2-left-card-left-title">{row2left.title}</div>
                            <div className="dash-down-row2-left-card-left-price">{row2left.price}</div>
                        </div>
                    </Box>
                </Box>
            </Box>

        </div >
    )
}
