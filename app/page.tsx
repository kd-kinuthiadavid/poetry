export default function Home() {
  return (
    <main className="flex flex-col justify-center lg:flex-row lg:justify-between gap-x-96 items-center h-full gap-y-10 text-left mx-28">
      <div className="flex flex-col gap-y-10 justify-center items-center text-center lg:text-left">
        <h1 className="heading">
          software <br /> & soul.
        </h1>
        <div className="lg:ml-16 flex flex-col gap-y-5">
          <h2 className="text-3xl font-thin max-w-xl leading-tight">
            An exploration of life and human experience through code and poetry.
          </h2>
          <small className="font-thin text-xl max-w-xl leading-relaxed">
            <span className="text-pr-orange underline font-medium">
              Subscribe
            </span>{" "}
            to my weekly newsletter.
          </small>
        </div>
      </div>
      <div className="flex justify-start text-left lg:flex-col gap-x-5 gap-y-2">
        <p className="font-thin underline md:text-2xl cursor-pointer">
          instagram.
        </p>
        <p className="font-thin underline md:text-2xl cursor-pointer">
          twitter.
        </p>
        <p className="font-thin underline md:text-2xl cursor-pointer">dev.</p>
        <p className="font-thin underline md:text-2xl cursor-pointer">poems.</p>
      </div>
    </main>
  );
}
