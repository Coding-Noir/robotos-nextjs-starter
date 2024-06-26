import { Button } from "./ui/button";
import Link from "next/link";

type SkipToButtonProps = {
  url: string;
  text: string;
};

export default function SkipToButton({
  url = "#main",
  text = "content",
}: SkipToButtonProps) {
  return (
    <Button className="" asChild>
      <Link href={url}>Skip to {text}</Link>
    </Button>
  );
}
