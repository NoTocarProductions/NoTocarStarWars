import { Outlet, useLoaderData } from "react-router";
import MainNavigation from '../components/MainNavigation'
import { useSubmit } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";


function RootLayout() {

    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(()=>{
        if (!token) {
            return;
        }

        setTimeout(() => {
            submit(null, {action: '/logout', method: 'post'})
        }, 60*60*1000);
    },[token, submit])

    return (
        <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
}

export default RootLayout;