import React from 'react'
import Sidemenu from '../Components/Sidemenu'
import Project from './Project'
import '../CSS/Dashboard.css'
import DashTop from '../Components/DashTop'
import DashboardPage from './DashboardPage'
export default function Dashboard() {
    return (
        <div className='dashboard'>
            <Sidemenu />
            <div className="dashboard-right">
                <DashTop />
                <div className="dash-right-down">
                    <DashboardPage />
                </div>

            </div>
        </div>
    )
}
