import React from "react";
import Link from "./link";
import {LayoutDashboard,Home,Settings,User,ShoppingBag}  from 'lucide-react'

function SideBar({ children }) {
   
    const normalstyles = 'text-purple-500 text-lg hover:bg-gray-400 rounded-lg  p-1'
    const activestyles= 'text-purple-500 text-lg hover:bg-gray-400 rounded-lg  p-1 bg-gray-300 '

    return (
        <section className="flex  ">
            <div className="fixed  z-20 w-12 bg-slate-100  h-screen top-0 left-0">
                <nav className="flex flex-col items-center gap-8 md:gap-12  mt-4">
                <Link 
                className={`${window.location.pathname==='/' || '' ? activestyles: normalstyles}`}
                name="/">
                    <Home/>
                </Link>
                <Link 
                className={`${window.location.pathname==='/customers' || '' ? activestyles: normalstyles}`}
                name="/customers">
                    <LayoutDashboard/>
                </Link>
                <Link 
                className={`${window.location.pathname==='/profile' || '' ? activestyles: normalstyles}`}

                    name="/profile">
                    <User/>
                </Link>
                <Link 
                className={`${window.location.pathname==='/recentorders' || '' ? activestyles: normalstyles}`}
                name="/recentorders">
                    <ShoppingBag/>
                    </Link>
                <Link
                className={`${window.location.pathname==='/settings' || '' ? activestyles: normalstyles}`}

                    name="/settings">
                    <Settings/>
                </Link>
                </nav>
            </div>
            <div className="ml-16 w-full md:px-4">{children}</div>
        </section>
    );
}

export default SideBar;
