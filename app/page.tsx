"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BrandLoader } from "@/components/loader/BrandLoader";
import { MotionBackground } from "@/components/layout/MotionBackground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ModelsShowcase } from "@/components/sections/ModelsShowcase";
import { WorkspaceShowcase } from "@/components/sections/WorkspaceShowcase";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FloatingExtension } from "@/components/extension/FloatingExtension";

export default function ShowcasePage() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <BrandLoader onDone={() => setReady(true)} />}
      {ready && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <MotionBackground />
          <Header />
          <main>
            <Hero />
            <Features />
            <ModelsShowcase />
            <WorkspaceShowcase />
            <Faq />
            <CtaBanner />
          </main>
          <Footer />
          <FloatingExtension />
        </motion.div>
      )}
    </>
  );
}
