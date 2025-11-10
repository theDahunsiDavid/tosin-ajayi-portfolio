/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "motion/react";
import {
  ArrowLeft,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Award,
  Lightbulb,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";
import { SolutionSection } from "@/components/SolutionSection";
import { ImpactResults } from "@/components/ImpactResults";
import { LowFidelityWireframes } from "@/components/finpay/LowFidelityWireframes";
import { MidFidelityWireframes } from "@/components/finpay/MidFidelityWireframes";
import { HighFidelityDesigns } from "@/components/finpay/HighFidelityDesigns";
import { BeforeAfterComparison } from "@/components/finpay/BeforeAfterComparison";
import { FinPayHero } from "@/components/finpay/FinPayHero";
import { ShopSphereHero } from "@/components/shopsphere/ShopSphereHero";
import { LowFidelityWireframes as ShopSphereLowFi } from "@/components/shopsphere/LowFidelityWireframes";
import { MidFidelityWireframes as ShopSphereMidFi } from "@/components/shopsphere/MidFidelityWireframes";
import { HighFidelityDesigns as ShopSphereHighFi } from "@/components/shopsphere/HighFidelityDesigns";
import { BeforeAfterComparison as ShopSphereBeforeAfter } from "@/components/shopsphere/BeforeAfterComparison";
import { MobileWireframes as ShopSphereMobile } from "@/components/shopsphere/MobileWireframes";
import { HealthHubHero } from "@/components/healthhub/HealthHubHero";
import { LowFidelityWireframes as HealthHubLowFi } from "@/components/healthhub/LowFidelityWireframes";
import { MidFidelityWireframes as HealthHubMidFi } from "@/components/healthhub/MidFidelityWireframes";
import { HighFidelityDesigns as HealthHubHighFi } from "@/components/healthhub/HighFidelityDesigns";
import { TravelEaseHero } from "@/components/travelease/TravelEaseHero";
import { FoodHubHero } from "@/components/foodhub/FoodHubHero";
import { FitProHero } from "@/components/fitpro/FitProHero";
import { LowFidelityWireframes as FitProLowFi } from "@/components/fitpro/LowFidelityWireframes";
import { MidFidelityWireframes as FitProMidFi } from "@/components/fitpro/MidFidelityWireframes";
import { HighFidelityDesigns as FitProHighFi } from "@/components/fitpro/HighFidelityDesigns";
import { CompetitiveAnalysis } from "@/components/CompetitiveAnalysis";

interface CaseStudyDetailProps {
  caseStudy: {
    id: string;
    title: string;
    role?: string;
    duration?: string;
    team?: string;
    tools?: string[];
    category: string;
    description: string;
    image: string;
    color: string;
    tags?: string[];
    outcome?: string;
    detail: Record<string, any>;
  };
}

export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative container mx-auto px-6 py-12">
          <Link href="/#work">
            <Button
              variant="ghost"
              className="mb-8 text-white hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex flex-wrap gap-3 mb-8">
              {caseStudy.tags?.map((tag: string) => (
                <Badge
                  key={tag}
                  className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mb-8 max-w-4xl">{caseStudy.title}</h1>

            <p className="text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
              {caseStudy.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10">
              <div>
                <p className="text-slate-400 mb-2 uppercase tracking-wider">
                  Role
                </p>
                <p className="text-white">{caseStudy.detail.role}</p>
              </div>
              <div>
                <p className="text-slate-400 mb-2 uppercase tracking-wider">
                  Duration
                </p>
                <p className="text-white">{caseStudy.detail.duration}</p>
              </div>
              <div>
                <p className="text-slate-400 mb-2 uppercase tracking-wider">
                  Team
                </p>
                <p className="text-white">{caseStudy.detail.team}</p>
              </div>
              <div>
                <p className="text-slate-400 mb-2 uppercase tracking-wider">
                  Impact
                </p>
                <p className="text-white">{caseStudy.outcome?.split(",")[0]}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image - Full Bleed */}
      {caseStudy.title.includes("FinPay") ? (
        <FinPayHero />
      ) : caseStudy.title.includes("ShopSphere") ? (
        <ShopSphereHero />
      ) : caseStudy.title.includes("HealthHub") ? (
        <HealthHubHero />
      ) : caseStudy.title.includes("TravelEase") ? (
        <TravelEaseHero />
      ) : caseStudy.title.includes("FoodHub") ? (
        <FoodHubHero />
      ) : caseStudy.title.includes("FitPro") ? (
        <FitProHero />
      ) : (
        <section className="relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Competitive Analysis */}
      {caseStudy.detail.competitiveAnalysis && (
        <CompetitiveAnalysis
          title={caseStudy.detail.competitiveAnalysis.title}
          competitors={caseStudy.detail.competitiveAnalysis.competitors}
          keyInsight={caseStudy.detail.competitiveAnalysis.keyInsight}
        />
      )}

      {/* Overview Section - Story Introduction */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-slate-900 rounded-full" />
              <span className="text-slate-500 uppercase tracking-wider">
                Overview
              </span>
            </div>

            <h2 className="mb-8 text-slate-900">The Challenge</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                {caseStudy.detail.challenge}
              </p>
              <p className="text-slate-700 leading-relaxed">
                {caseStudy.detail.solution}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Goals - Visual Cards */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full mb-4">
                  Business Objectives
                </span>
                <h2 className="text-slate-900">
                  Aligning Design with Business Goals
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.detail.businessGoals.map(
                  (goal: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="p-8 h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-300">
                              <Target className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors duration-300" />
                            </div>
                          </div>
                          <p className="text-slate-700 leading-relaxed">
                            {goal}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Discovery - Premium Layout */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-slate-900 rounded-full" />
              <span className="text-slate-500 uppercase tracking-wider">
                Research & Discovery
              </span>
            </div>

            <h2 className="mb-10 text-slate-900">
              Understanding the Problem Space
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="mb-6 text-slate-900">Research Methodology</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {caseStudy.detail.researchProcess}
                </p>
              </div>

              <div>
                <h3 className="mb-6 text-slate-900">Research Activities</h3>
                <div className="space-y-4">
                  {caseStudy.detail.researchMethods?.map(
                    (method: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl"
                      >
                        <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                          <span className="text-2xl">{method.count}</span>
                        </div>
                        <p className="text-slate-700">{method.label}</p>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Key Insights - Quote Style */}
            <div className="mb-10">
              <h3 className="mb-6 text-slate-900">Key Research Insights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.detail.keyInsights?.map(
                  (insight: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 h-full">
                        <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {insight}
                        </p>
                      </Card>
                    </motion.div>
                  ),
                )}
              </div>
            </div>

            {/* Pain Points - Highlighted */}
            <div>
              <h3 className="mb-6 text-slate-900">User Pain Points</h3>
              <div className="space-y-3">
                {caseStudy.detail.painPoints.map(
                  (pain: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="p-4 border-l-4 border-red-500 bg-red-50/50">
                        <div className="flex gap-3 items-start">
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {pain}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Methodology - New Section */}
      {caseStudy.detail.methodology && (
        <section className="bg-gradient-to-br from-slate-50 to-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-1 bg-slate-900 rounded-full" />
                  <span className="text-slate-500 uppercase tracking-wider">
                    Design Process
                  </span>
                </div>

                <h2 className="mb-6 text-slate-900">
                  My {caseStudy.detail.methodology.approach} Approach
                </h2>
                <p className="text-slate-600 leading-relaxed mb-10 max-w-4xl">
                  {caseStudy.detail.methodology.description}
                </p>

                {/* Methodology Phases */}
                <div className="space-y-6">
                  {caseStudy.detail.methodology.phases.map(
                    (phase: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                          <div className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                                  <span className="text-xl font-bold">
                                    {index + 1}
                                  </span>
                                </div>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-slate-900 mb-2">
                                  {phase.name}
                                </h3>
                                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                                  {phase.description}
                                </p>

                                {/* Activities */}
                                <div className="mb-3">
                                  <p className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                                    Key Activities:
                                  </p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {phase.activities.map(
                                      (activity: string, i: number) => (
                                        <Badge
                                          key={i}
                                          variant="secondary"
                                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs"
                                        >
                                          {activity}
                                        </Badge>
                                      ),
                                    )}
                                  </div>
                                </div>

                                {/* Outcomes */}
                                <div className="bg-linear-to-br from-red-50 to-rose-50 border border-red-100 rounded-xl p-4">
                                  <div className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                      <p className="text-xs font-semibold text-green-900 mb-0.5">
                                        Outcome:
                                      </p>
                                      <p className="text-xs text-green-800 leading-relaxed">
                                        {phase.outcomes}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ),
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* User Personas - Rich Cards */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-1 bg-white rounded-full" />
                <span className="text-slate-300 uppercase tracking-wider">
                  User Personas
                </span>
              </div>

              <h2 className="text-white mb-10">Meet the Users</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.detail.userPersonas?.map(
                  (persona: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <Card className="p-6 bg-white text-slate-900 border-0 shadow-2xl h-full">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Users className="w-8 h-8 text-slate-700" />
                          </div>
                          <div className="grow">
                            <h3 className="text-slate-900 mb-1">
                              {persona.name}
                            </h3>
                            <p className="text-slate-600 text-sm">
                              {persona.age} • {persona.occupation}
                            </p>
                          </div>
                        </div>

                        <Separator className="mb-4" />

                        <div className="space-y-4">
                          <div>
                            <p className="text-slate-500 text-xs mb-2 uppercase tracking-wider">
                              Background
                            </p>
                            <p className="text-slate-700 text-sm leading-relaxed">
                              {persona.bio}
                            </p>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-slate-500 text-xs mb-2 uppercase tracking-wider">
                              Goals
                            </p>
                            <ul className="space-y-1.5">
                              {persona.goals.map((goal: string, i: number) => (
                                <li
                                  key={i}
                                  className="flex gap-2 items-start text-slate-700 text-sm"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>{goal}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-red-50 p-4 rounded-lg">
                            <p className="text-slate-500 text-xs mb-2 uppercase tracking-wider">
                              Frustrations
                            </p>
                            <ul className="space-y-1.5">
                              {persona.frustrations.map(
                                (frustration: string, i: number) => (
                                  <li
                                    key={i}
                                    className="flex gap-2 items-start text-slate-700 text-sm"
                                  >
                                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                                    <span>{frustration}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Journey Map - Timeline Design */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-slate-900 rounded-full" />
              <span className="text-slate-500 uppercase tracking-wider">
                User Journey
              </span>
            </div>

            <h2 className="mb-6 text-slate-900">User Journey Map</h2>
            <p className="text-slate-600 mb-10 leading-relaxed max-w-3xl">
              {caseStudy.detail.journeyDescription}
            </p>

            <div className="relative">
              {/* Journey Timeline */}
              <div
                className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 rounded-full"
                style={{ zIndex: 0 }}
              />

              <div className="grid md:grid-cols-5 gap-4 relative">
                {caseStudy.detail.journeyStages.map(
                  (stage: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <Card className="p-4 bg-white border-2 shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-10 h-full flex flex-col">
                        <div className="flex flex-col items-center text-center mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-xl flex items-center justify-center mb-3 shadow-lg">
                            <span className="text-lg font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <h4 className="text-slate-900 mb-1 text-sm font-bold">
                            {stage.name}
                          </h4>
                          <p className="text-2xl mb-0">{stage.emotion}</p>
                        </div>

                        <Separator className="mb-3" />

                        <div className="flex-grow flex flex-col">
                          <p className="text-slate-500 text-xs mb-1.5 uppercase tracking-wider">
                            Action
                          </p>
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {stage.action}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Process - Sophisticated Tabs */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-1 bg-slate-900 rounded-full" />
                <span className="text-slate-500 uppercase tracking-wider">
                  Design Process
                </span>
              </div>

              <h2 className="mb-6 text-slate-900">Iterations & Refinement</h2>
              <p className="text-slate-600 mb-10 leading-relaxed max-w-3xl">
                {caseStudy.detail.designApproach}
              </p>

              <Tabs defaultValue="low" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-12 bg-white p-2 rounded-2xl shadow-lg">
                  <TabsTrigger
                    value="low"
                    className="rounded-xl data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                  >
                    Low-Fidelity
                  </TabsTrigger>
                  <TabsTrigger
                    value="mid"
                    className="rounded-xl data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                  >
                    Mid-Fidelity
                  </TabsTrigger>
                  <TabsTrigger
                    value="high"
                    className="rounded-xl data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                  >
                    High-Fidelity
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="low">
                  {caseStudy.title.includes("FinPay") ? (
                    <LowFidelityWireframes />
                  ) : caseStudy.title.includes("ShopSphere") ? (
                    <ShopSphereLowFi />
                  ) : caseStudy.title.includes("HealthHub") ? (
                    <HealthHubLowFi />
                  ) : caseStudy.title.includes("FitPro") ? (
                    <FitProLowFi />
                  ) : (
                    <Card className="overflow-hidden bg-white border-0 shadow-xl">
                      <div className="p-12">
                        <div className="flex items-start gap-6 mb-8">
                          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-slate-900 mb-3">
                              Low-Fidelity Wireframes
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                              Initial sketches and rough wireframes to explore
                              different concepts and information architecture.
                              These quick iterations allowed us to test multiple
                              ideas rapidly and gather early feedback.
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 aspect-video flex items-center justify-center shadow-inner relative">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2V0Y2glMjB3aXJlZnJhbWUlMjBwYXBlcnxlbnwxfHx8fDE3NjE1NzU3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Low fidelity wireframes"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>

                        <div className="mt-8 grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <p className="text-slate-500 mb-2">Focus</p>
                            <p className="text-slate-900">Structure & Layout</p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <p className="text-slate-500 mb-2">Iterations</p>
                            <p className="text-slate-900">15+ Concepts</p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <p className="text-slate-500 mb-2">Tools</p>
                            <p className="text-slate-900">
                              Pen & Paper, Balsamiq
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="mid">
                  {caseStudy.title.includes("FinPay") ? (
                    <MidFidelityWireframes />
                  ) : caseStudy.title.includes("ShopSphere") ? (
                    <ShopSphereMidFi />
                  ) : caseStudy.title.includes("HealthHub") ? (
                    <HealthHubMidFi />
                  ) : caseStudy.title.includes("FitPro") ? (
                    <FitProMidFi />
                  ) : (
                    <Card className="overflow-hidden bg-white border-0 shadow-xl">
                      <div className="p-12">
                        <div className="flex items-start gap-6 mb-8">
                          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Lightbulb className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-slate-900 mb-3">
                              Mid-Fidelity Wireframes
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                              More refined wireframes with better structure and
                              hierarchy. These were used for initial usability
                              testing to validate our information architecture
                              and interaction patterns before investing in
                              visual design.
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 aspect-video flex items-center justify-center shadow-inner relative">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwbW9ja3VwfGVufDF8fHx8MTc2MTUwNjA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Mid fidelity wireframes"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>

                        <div className="mt-8 grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <p className="text-slate-500 mb-2">Focus</p>
                            <p className="text-slate-900">
                              Interactions & Flow
                            </p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <p className="text-slate-500 mb-2">Testing</p>
                            <p className="text-slate-900">24 Participants</p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <p className="text-slate-500 mb-2">Tools</p>
                            <p className="text-slate-900">Figma, Sketch</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="high">
                  {caseStudy.title.includes("FinPay") ? (
                    <HighFidelityDesigns />
                  ) : caseStudy.title.includes("ShopSphere") ? (
                    <ShopSphereHighFi />
                  ) : caseStudy.title.includes("HealthHub") ? (
                    <HealthHubHighFi />
                  ) : caseStudy.title.includes("FitPro") ? (
                    <FitProHighFi />
                  ) : (
                    <Card className="overflow-hidden bg-white border-0 shadow-xl">
                      <div className="p-12">
                        <div className="flex items-start gap-6 mb-8">
                          <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Award className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-slate-900 mb-3">
                              High-Fidelity Mockups
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                              Final designs with complete visual design,
                              typography, colours, and interactions. These
                              pixel-perfect designs were thoroughly tested and
                              validated before handoff to development, including
                              responsive breakpoints and accessibility
                              considerations.
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 aspect-video flex items-center justify-center shadow-2xl relative">
                          <ImageWithFallback
                            src={caseStudy.image}
                            alt="High fidelity mockups"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>

                        <div className="mt-8 grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <p className="text-slate-500 mb-2">Focus</p>
                            <p className="text-slate-900">
                              Visual Design & Polish
                            </p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <p className="text-slate-500 mb-2">Components</p>
                            <p className="text-slate-900">Design System</p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl">
                            <p className="text-slate-500 mb-2">Handoff</p>
                            <p className="text-slate-900">Dev-Ready Specs</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usability Testing - Data-Rich */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-slate-900 rounded-full" />
              <span className="text-slate-500 uppercase tracking-wider">
                Validation
              </span>
            </div>

            <h2 className="mb-6 text-slate-900">Usability Testing</h2>

            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="mb-4 text-slate-900">Testing Approach</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {caseStudy.detail.testingApproach}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {caseStudy.detail.testingMetrics.map(
                  (metric: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="p-6 text-center bg-gradient-to-br from-slate-900 to-slate-700 text-white border-0 shadow-lg h-full">
                        <div className="mb-2">{metric.value}</div>
                        <p className="text-slate-300">{metric.label}</p>
                      </Card>
                    </motion.div>
                  ),
                )}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="mb-8 text-slate-900">Key Findings & Iterations</h3>
              <div className="space-y-4">
                {caseStudy.detail.testingFindings.map(
                  (finding: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600">{index + 1}</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed flex-1">
                            {finding}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  ),
                )}
              </div>
            </div>

            <Card className="p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-slate-900 mb-3">
                        Testing Validation
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        Through iterative testing, I achieved a{" "}
                        <strong>
                          {caseStudy.detail.taskSuccessRate} task success rate
                        </strong>{" "}
                        and significantly improved user satisfaction scores.
                        Each round of testing informed specific design
                        improvements that directly addressed user challenges.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-xl relative h-64">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1690191863988-f685cddde463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGRlc2lnbiUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MTU4MzUyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Usability testing"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Solution Section - Enhanced */}
      {caseStudy.detail.solutionDetails && (
        <SolutionSection
          description={caseStudy.detail.solutionDetails.description}
          keyFeatures={caseStudy.detail.solutionDetails.keyFeatures}
          designDecisions={caseStudy.detail.solutionDetails.designDecisions}
        />
      )}

      {/* Final Solution - Showcase */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-1 bg-slate-900 rounded-full" />
                <span className="text-slate-500 uppercase tracking-wider">
                  Design Showcase
                </span>
              </div>

              <h2 className="text-slate-900 mb-6">Visual Design</h2>
              <p className="text-slate-600 leading-relaxed max-w-3xl mb-10">
                {caseStudy.detail.finalSolution ||
                  "Explore the visual design decisions and interface components that bring this solution to life."}
              </p>

              {/* Before/After Comparison */}
              {caseStudy.title.includes("FinPay") && (
                <div className="mb-16">
                  <BeforeAfterComparison />
                </div>
              )}
              {caseStudy.title.includes("ShopSphere") && (
                <>
                  <div className="mb-16">
                    <ShopSphereBeforeAfter />
                  </div>
                  <div className="mb-16">
                    <ShopSphereMobile />
                  </div>
                </>
              )}

              <div className="grid md:grid-cols-2 gap-8">
                {caseStudy.detail.keyFeatures.map(
                  (feature: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="p-8 h-full bg-white border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl group">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-slate-900 mb-3">{feature.title}</h4>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </Card>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact & Results - Enhanced Section */}
      {caseStudy.detail.impactMetrics && (
        <ImpactResults
          metrics={caseStudy.detail.impactMetrics.metrics}
          outcomes={caseStudy.detail.impactMetrics.outcomes}
          testimonial={caseStudy.detail.impactMetrics.testimonial}
        />
      )}

      {/* Legacy Impact & Results Section */}
      {!caseStudy.detail.impactMetrics && (
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-1 bg-white rounded-full" />
                  <span className="text-slate-300 uppercase tracking-wider">
                    Impact & Results
                  </span>
                </div>

                <h2 className="text-white mb-6">Success Metrics</h2>
                <p className="text-slate-300 max-w-3xl mb-10 leading-relaxed">
                  Measurable outcomes that demonstrate the value of user-centred
                  design
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {caseStudy.detail.metrics.map(
                    (metric: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="p-6 text-center bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
                          <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                          <div className="mb-2 text-white">{metric.value}</div>
                          <p className="text-slate-300 text-sm">
                            {metric.label}
                          </p>
                        </Card>
                      </motion.div>
                    ),
                  )}
                </div>

                <Card className="p-6 bg-white text-slate-900 border-0 shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-slate-900 mb-3">
                        How Research Informed Design Decisions
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed mb-4">
                        {caseStudy.detail.researchImpact}
                      </p>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="text-slate-700 text-sm leading-relaxed">
                          By aligning user needs with business goals through
                          data-driven insights, I delivered a solution that not
                          only improved user satisfaction but also drove
                          measurable business outcomes and set new benchmarks
                          for the product.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Learnings - Reflective */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-slate-900 rounded-full" />
              <span className="text-slate-500 uppercase tracking-wider">
                Reflection
              </span>
            </div>

            <h2 className="mb-12 text-slate-900">Key Learnings</h2>
            <div className="space-y-6">
              {caseStudy.detail.learnings.map(
                (learning: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200 shadow-md">
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                          <Lightbulb className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-slate-700 leading-relaxed flex-1">
                          {learning}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Back to Portfolio */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-slate-900 mb-6">
              Interested in more projects?
            </h3>
            <Link href="/#work">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 shadow-lg"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
