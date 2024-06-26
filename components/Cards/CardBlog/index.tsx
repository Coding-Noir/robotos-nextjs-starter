import React from "react";
import Card from "../Card";
import Link from "next/link";
import Image from "next/image";

export default function CardBlog({
  image,
  imageAlt,
  title,
  excerpt,
  buttonText,
  url,
}: {
  image?: string;
  imageAlt?: string;
  title: string;
  excerpt?: string;
  buttonText?: string;
  url: string;
}) {
  return (
    <Card className="">
      <div className="">
        <Image
          src={image || "https://dummyimage.com/200x200.png/eb0d18/ffffff"}
          alt={imageAlt || "Card"}
          className=""
          fill
        />
      </div>

      <div className="">
        <h3 className="">{title}</h3>
        <div className="">{excerpt}</div>
      </div>

      <Link href={url} className="">
        {buttonText || "Read More"} →
      </Link>
    </Card>
  );
}
