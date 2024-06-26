import Image from "next/image";
import Card from "../Card";

export default function CardSimple({
  image,
  text = "Title",
}: {
  image: string;
  text: string;
}) {
  return (
    <Card className="">
      <Image width={494} height={494} src={image} alt="Card" className="" />

      <h3 className="">{text}</h3>
    </Card>
  );
}
