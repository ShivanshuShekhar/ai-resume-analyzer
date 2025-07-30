import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { resumes } from "constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-eading">
        <h1>Track Your Application & Resume Rating</h1>
        <h2>Review your submissions and check your AI-powerd feedback.</h2>
      </div>
    </section>

    {resumes.length > 0 && (
      <div>
        {resumes.map((resume: Resume) => (
          <ResumeCard key={resume.id} resume={resume}  />
      ))}
      </div>
    )}

  </main>
}
