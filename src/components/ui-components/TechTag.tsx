
import { cn } from "@/lib/utils";

interface TechTagProps {
  name: string;
  className?: string;
}

const TechTag = ({ name, className }: TechTagProps) => {
  return (
    <span className={cn("tech-tag", className)}>
      {name}
    </span>
  );
};

export default TechTag;
