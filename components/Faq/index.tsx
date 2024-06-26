"use client";
import React, { useRef } from "react";
import Container from "../Container";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { containerStaggerVariants, faqVariants } from "@/lib/animations";
import { faqs } from "@/constants";

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const imageStyles = "";

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerStaggerVariants}
      className=""
      id="faq"
    >
      <Container>
        <SectionTitle as="h2" className="">
          FAQ
        </SectionTitle>

        <div className="">
          {faqs.map(
            (
              { question, answer, image, imageAlt, imgHeight, imgWidth },
              index,
            ) => (
              <motion.div key={index} variants={faqVariants}>
                <Image
                  src={image}
                  alt={imageAlt}
                  height={imgHeight}
                  width={imgWidth}
                  className=""
                />

                <h3 className="">{question}</h3>
                <div>{answer}</div>
              </motion.div>
            ),
          )}
        </div>
      </Container>

      {/* Top */}
      <div className="">
        {/* Top Image One */}
        <div className={cn(imageStyles, "")}>
          <Image src="/images/head11.svg" className="" fill alt="" />
        </div>

        {/* Top Image Two */}
        <div className={cn(imageStyles, "")}>
          <Image src="/images/head02.svg" fill alt="" />
        </div>

        {/* Top Image Three */}
        <div className={cn(imageStyles, "")}>
          <Image src="/images/icon-256w.png" className="" fill alt="" />
        </div>
      </div>

      {/* Right */}
      <div className="">
        {/* Right Image One */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head23.svg" fill alt="" />
        </div>

        {/* Right Image Two */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head12.svg" className="" fill alt="" />
        </div>

        {/* Right Image Three */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head21.svg" className="" fill alt="" />
        </div>

        {/* Right Image Four */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head22.svg" className="" fill alt="" />
        </div>

        {/* Right Image Five */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head20.svg" className="" fill alt="" />
        </div>

        {/* Right Image Six */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head14.svg" fill alt="" />
        </div>

        {/* Right Image Seven */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head18.svg" className="" fill alt="" />
        </div>
      </div>

      {/* Bottom */}
      <div className="">
        {/* Bottom Image One */}
        <div className={cn(imageStyles, "")}>
          <Image src="/images/head27.svg" className="" fill alt="" />
        </div>

        {/* Bottom Image Two */}
        <div className={cn(imageStyles, "")}>
          <Image src="/images/head17.svg" fill alt="" />
        </div>

        {/* Bottom Image Three */}
        <div className={cn(imageStyles, "")}>
          <Image src="/images/head19.svg" className="" fill alt="" />
        </div>
      </div>

      {/* Left */}
      <div className="">
        {/* Left Image One */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head04.svg" className="" fill alt="" />
        </div>

        {/* Left Image Two */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head26.svg" className="" fill alt="" />
        </div>

        {/* Left Image Three */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head29.svg" className="" fill alt="" />
        </div>

        {/* Left Image Four */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head27.svg" fill alt="" />
        </div>

        {/* Left Image Five */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head25.svg" className="" fill alt="" />
        </div>

        {/* Left Image Six */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head24.svg" fill alt="" />
        </div>
        <div className={cn(imageStyles)}>
          <Image src="/images/head05.svg" fill alt="" />
        </div>
      </div>
    </motion.section>
  );
}
