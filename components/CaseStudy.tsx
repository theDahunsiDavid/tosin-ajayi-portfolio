import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ReactNode } from "react";
import Link from "next/link";

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  customThumbnail?: ReactNode;
  tags: string[];
  outcome: string;
  index: number;
  comingSoon?: boolean;
  slug?: string;
}

export function CaseStudy({
  title,
  description,
  image,
  customThumbnail,
  tags,
  outcome,
  index,
  comingSoon,
  slug,
}: CaseStudyProps) {
  const cardContent = (
    <Card
      className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-full flex flex-col ${comingSoon ? "" : "cursor-pointer"}`}
    >
      <div className="relative overflow-hidden aspect-video">
        {customThumbnail ? (
          <div className="w-full h-full">{customThumbnail}</div>
        ) : (
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/90 text-slate-900 backdrop-blur-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="mb-3 text-slate-900 group-hover:text-slate-700 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 mb-4 flex-grow">{description}</p>
        <div className="mb-4 p-4 bg-slate-50 rounded-lg">
          <p className="text-slate-500 mb-1">Outcome</p>
          <p className="text-slate-900">{outcome}</p>
        </div>
        {comingSoon ? (
          <div className="flex items-center text-red-600">
            <span>Coming Soon</span>
          </div>
        ) : (
          <div className="flex items-center text-slate-900 group-hover:text-slate-700 transition-colors">
            <span className="mr-2">View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      {comingSoon || !slug ? (
        cardContent
      ) : (
        <Link href={`/case-studies/${slug}`} className="block h-full">
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
}
