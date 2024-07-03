import React from "react";
import MainNavigation from '../components/MainNavigation';
import { Outlet, useNavigation} from 'react-router-dom';
function RootLayout() {
    // const event = useLoaderData();
    const navigation = useNavigation();

    return (
        
        <>
        <MainNavigation />
            <main>
                {navigation.state === 'loading' && <p>loading...</p>} ;
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;