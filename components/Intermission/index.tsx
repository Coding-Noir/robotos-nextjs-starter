import Image from "next/image";
import { rowImages } from "@/constants";

export default function Intermission() {
  return (
    <section className="">
      <div className="">
        {rowImages.map(({ src, alt }, index) => (
          <div className="" key={index}>
            <Image src={src} alt={alt} fill className="" />
          </div>
        ))}
      </div>
    </section>
  );
}
