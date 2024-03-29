import Link from "next/link";
import Image from "next/image";

export default function PhotoRightCard({
  imageUrl,
  altText,
  githubUrl,
  siteUrl,
  projectName,
  monthAndYear,
  technologies,
  ctaText,
}) {
  return (
    <section className="show flex flex-col md:flex-row items-center gap-6 md:gap-14 w-full">
      <div className="flex flex-col md:ml-18 md:w-1/2">
        <Link href={githubUrl} target="_blank">
          <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 mb-1 transition ease-in-out duration-300">
            {projectName}
          </h4>
        </Link>
        <p className="text-xs mb-2 text-dark-grey">{monthAndYear}</p>

        <p className="text-sm mb-2">{technologies}</p>
        <div className="flex items-center">
          <Link href={siteUrl} target="_blank">
            <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">
              {ctaText}
            </span>
          </Link>
          <Link href={siteUrl} target="_blank">
            <img
              className="w-6 ml-2"
              src="/images/right-arrow.svg"
              alt="right arrow"
            />
          </Link>
        </div>
      </div>

      <div className="order-last h-96 overflow-auto scrollbar-hide md:w-1/2">
        <Image src={imageUrl} alt={altText} height={384} width={500} />
      </div>
    </section>
  );
}
