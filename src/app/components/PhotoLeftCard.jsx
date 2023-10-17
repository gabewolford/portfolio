import Link from "next/link";

export default function PhotoLeftCard({
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
      <div className="order-last md:order-first max-h-96 overflow-auto scrollbar-hide md:w-1/2">
        <img src={imageUrl} alt={altText} />
      </div>

      <div className="md:w-1/2">
        <div className="flex flex-col md:mr-18">
          <Link href={githubUrl} target="_blank">
            <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 pt-4 mb-1 transition ease-in-out duration-300">
              {projectName}
            </h4>
          </Link>
          <p className="text-xs mb-2 text-dark-grey">{monthAndYear}</p>

          <p className="text-sm mb-2">{technologies}</p>
          <div className="flex items-center">
            <Link href={siteUrl} target="_blank">
              <img
                className="w-6 mr-2"
                src="/images/left-arrow.svg"
                alt="left arrow"
              />
            </Link>
            <Link href={siteUrl} target="_blank">
              <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">
                {ctaText}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
