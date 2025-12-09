import { motion } from "motion/react";
import { Award, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Card } from "@/components/ui/card";

export function AboutMe() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-1 bg-slate-900 rounded-full" />
              <span className="text-slate-900 uppercase tracking-wider font-semibold">
                About Me
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
            {/* Left Column - Image & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                <ImageWithFallback
                  src="/priscilla-ajayi-profile-picture.jpeg"
                  alt="Picture of Priscilla Tosin Ajayi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-slate-900" />
                      <span className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                        Senior Product Designer
                      </span>
                    </div>
                    <h3 className="text-slate-900">Priscilla Ajayi</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <p className="text-slate-700 text-lg leading-relaxed mb-4">
                  My design philosophy centers on empathy and inclusivity. I
                  believe great design solves real problems for real
                  people—especially those often overlooked.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Through rigorous user research, iterative prototyping, and
                  data-driven validation, I transform complex challenges into
                  intuitive, delightful solutions that drive measurable business
                  impact.
                </p>
              </div>

              <Card className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Professional Impact</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      I&apos;ve collaborated with cross-functional teams at
                      startups and established organizations to deliver products
                      that improved conversion rates by up to 45%, reduced user
                      errors by 60%, and increased customer satisfaction
                      significantly.
                    </p>
                  </div>
                </div>
              </Card>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-slate-900 rounded-full" />
                  Key Achievements
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Led redesign of banking app used by 2M+ UK customers",
                    "Designed NHS-compliant healthcare portal improving patient access",
                    "Reduced checkout abandonment by 42% through UX optimization",
                    "Mentor at Design for Good, supporting inclusive design practices",
                  ].map((achievement, i) => (
                    <Card
                      key={i}
                      className="p-4 bg-white border-slate-200 hover:border-slate-900 transition-colors"
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-700 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
