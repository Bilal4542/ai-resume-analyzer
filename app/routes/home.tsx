import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI resume Analyzer" },
    { name: "description", content: "Create a resume for your dream job!" },
  ];
}

export default function Home() {
  return<main>
<section className="main-section">
  <div className="page-heading">
    <h1 className="">Track Your Applications & Resume Ratings</h1>
    <h2>Review Your Submissions and check AI-Powered feedback</h2>
  </div>
</section>
  </main>;
}
