import { cn } from "@/lib/utils";

const containerSizes = {
  base: "",
};

export default function Container({
  as: Component = "div",
  className,
  size = "base",
  children,
}: {
  as?: React.ElementType;
  size?: "base";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Component className={cn("", containerSizes[size], className)}>
      {children}
    </Component>
  );
}
