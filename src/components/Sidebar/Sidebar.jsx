import React from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css'

import{
    HomeIcon,
    ChartBarIcon,
    DocumentTextIcon,
    CalendarIcon,
    ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';


function Sidebar () {

    const navItems=[
        {name: 'Dashboard', icon:HomeIcon, path:'/dashboard'},
        {name: 'Analytics', icon:ChartBarIcon, path:'/analytics'},
        {name: 'Activity Status', icon:DocumentTextIcon, path:'/activitystatus'},
        {name: 'Calendar', icon:CalendarIcon, path:'/calendar'},
        {name: 'Tasks', icon:ClipboardDocumentListIcon, path:'/tasks'}
    ];

    return (
        <div className="sidebar">
            <div className="logo">
                <h1>Dashboard</h1>
            </div>
            <nav className="nav-menu">
                <ul>
                    {navItems.map((item)=>(     
                        <li key={item.name}>
                            <Link to={item.path} className="nav-link">
                            <item.icon className="nav-icon"/>
                            <span>{item.name}</span>
                            </Link>
                        </li> 
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;
