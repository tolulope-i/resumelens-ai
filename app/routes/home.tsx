import React, { useEffect, useState } from 'react'
import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "appConstants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from '~/lib/puter';
import { useLocation, useNavigate } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeLens AI" },
    {
      name: "description",
      content: "Resume Analyzer Application Tracking System",
    },
  ];
}

export default function Home() {
  const { isLoading, auth } = usePuterStore();
    const navigate = useNavigate();


    useEffect(() => {
        if (!auth.isAuthenticated) navigate("/auth?next=/")
    }, [auth.isAuthenticated])

  return (
    <main className="bg-[url('./images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-8">
          <h1>AI-powered resume checker</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>
        {resumes.length > 0 && (
          <section className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
