import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { getCaseStudyBySlug } from "@/lib/case-studies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  // Convert CaseStudy type to the format expected by CaseStudyDetail component
  const caseStudyData = {
    ...caseStudy,
    category: caseStudy.tags[0] || "Design",
    color: "slate",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CaseStudyDetail caseStudy={caseStudyData} />
      <Contact />
    </div>
  );
}
