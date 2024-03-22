import Image from "next/image";

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}
const Metric = ({
  value,
  title,
  imgUrl,
  alt,
  href,
  textStyles,
  isAuthor,
}: MetricProps) => {
  return (
    <div className="flex-center flex-wrap gap-1">
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        <span>{value}</span>
        {title}
      </p>
    </div>
  );
};
export default Metric;
