"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
} from "@/constants/images";
import { Button } from "../ui/button";
import Availability from "../Availability";
import { robots } from "@/lib/animations";

export default function Hero() {
  const { scrollY } = useScroll();
  const imageContainerStyles = "absolute";

  const imageStyles = "";

  // Paralax Hero Effect
  const textBoxY = useTransform(scrollY, [0, 500], [0, 250]);
  const image1Y = useTransform(scrollY, [0, 500], [0, 300]);
  const image2Y = useTransform(scrollY, [0, 500], [0, 200]);
  const image3Y = useTransform(scrollY, [0, 500], [0, -100]);
  const image4Y = useTransform(scrollY, [0, -250], [0, 250]);
  const image5Y = useTransform(scrollY, [0, 500], [0, 50]);
  const image6Y = useTransform(scrollY, [0, 500], [0, 300]);
  const image7Y = useTransform(scrollY, [0, 500], [0, 350]);
  const image8Y = useTransform(scrollY, [0, 10], [0, -10]);
  const image9Y = useTransform(scrollY, [0, -500], [0, 450]);
  const image10Y = useTransform(scrollY, [0, 500], [0, 500]);
  const image11Y = useTransform(scrollY, [0, 500], [0, 550]);

  return (
    <motion.section className="">
      {/* Text */}
      <motion.div className="" style={{ y: textBoxY }}>
        <h1 className={cn("")}>
          <motion.span className="">RO</motion.span>

          <motion.span className="">BOT</motion.span>

          <motion.span className="">OS</motion.span>
        </h1>

        {/* Button */}
        <Button variant="mint" asChild>
          <Link href="#">MINT ROBOTOS</Link>
        </Button>

        {/* Availability */}
        <div className="">
          <Availability />
        </div>
      </motion.div>

      {/* Images */}
      <motion.div initial="hidden" animate="show" variants={robots}>
        {/* Image One */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image1Y, rotate: "10deg" }}
          variants={robots}
        >
          <div className={cn("", imageStyles)}>
            <Image src={Image2} alt="image 1" fill />
          </div>
        </motion.div>

        {/* Image Two */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image2Y, rotate: "20deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image4} alt="image 2" fill />
          </div>
        </motion.div>

        {/* Image Three */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image3Y, rotate: "-20deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image6} alt="image 3" fill />
          </div>
        </motion.div>

        {/* Image Four */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image4Y, rotate: "-20deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image5} alt="image 4" fill />
          </div>
        </motion.div>

        {/* Image Five */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image5Y, rotate: "8deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image3} alt="image 5" fill />
          </div>
        </motion.div>

        {/* Image Six */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image6Y, rotate: "10deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image1} alt="image 6" fill />
          </div>
        </motion.div>

        {/* Image Seven */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image7Y, rotate: "-23deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image11} alt="image 7" fill />
          </div>
        </motion.div>

        {/* Image Eight */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image8Y, rotate: "20deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image7} alt="image 8" fill />
          </div>
        </motion.div>

        {/* Image Nine */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image9Y, rotate: "-11deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image10} alt="image 9" fill />
          </div>
        </motion.div>

        {/* Image Ten */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image10Y, rotate: "-20deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image8} alt="image 10" fill />
          </div>
        </motion.div>

        {/* Image Eleven */}
        <motion.div
          className={cn("", imageContainerStyles)}
          style={{ y: image11Y, rotate: "14deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image9} alt="image 11" fill />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
