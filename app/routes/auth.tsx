import React, { useEffect, useState } from 'react'
import type { Route } from "./+types/home";
import { usePuterStore } from '~/lib/puter';
import { useLocation, useNavigate } from 'react-router';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "ResumeLens AI | Login" },
        {
            name: "description",
            content: "Login now to analyze your resume",
        },
    ];
}

const auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split("next=")[1];
    const navigate = useNavigate();


    useEffect(() => {
        if (auth.isAuthenticated) navigate(next)
    }, [auth.isAuthenticated, next])

    return (
        <main className="bg-[url('./images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className='gradient-border shadow-lg'>
                <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
                    <div className='flex flex-col items-center gap-2 text-center'>
                        <h3>Welcome to ResumeLens AI</h3>
                        <h2>Login now to analyze your resume</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className='auth-button animate-pulse'>
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            <div>
                                {auth.isAuthenticated ? (
                                    <button className='auth-button' onClick={auth.signOut}>
                                        <p>Logout</p>
                                    </button>
                                ) : (
                                    <button className='auth-button' onClick={auth.signIn}>
                                        <p>Login</p>
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default auth