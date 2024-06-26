"use client";
import { useRef } from "react";
import CardBlog from "../Cards/CardBlog";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import { containerStaggerVariants, itemVariants } from "@/lib/animations";
import { motion, useInView } from "framer-motion";
import { blogs } from "@/constants";

export default function RecentBlogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="">
      <Container>
        <SectionTitle as={"h2"} className="">
          RECENT BLOGS
        </SectionTitle>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerStaggerVariants}
          className=""
        >
          {blogs.slice(0, 3).map(({ image, title, excerpt, slug }, index) => (
            <motion.div key={index} variants={itemVariants} className="">
              <CardBlog
                url={`/blog/${slug}`}
                image={image}
                title={title}
                excerpt={excerpt}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
