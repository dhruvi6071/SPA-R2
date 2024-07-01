import React from "react";
import MainNavigation from '../components/MainNavigation';
import { Outlet, useLoaderData} from 'react-router-dom';
function RootLayout() {
    const event = useLoaderData();
    return (
        
        <>
        <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;