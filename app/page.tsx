export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-center gap-x-96 items-center h-full gap-y-10 text-left">
      <div className="flex flex-col gap-y-10">
        <h1 className="heading">Software & Soul.</h1>
        <h2 className="text-4xl md:text-6xl font-thin max-w-xl">
          An exploration of life and human experience through code and poetry.
        </h2>
        <small className="font-thin text-xl md:text-2xl max-w-xl leading-relaxed">
          {/* Hello there, my is{" "}
          <span className="text-pr-orange">David Kinuthia.</span> Am a software
          engineer by day and poet by night.{" "} */}
          <span className="text-pr-orange underline font-medium">
            Subscribe
          </span>{" "}
          to my weekly newsletter of refreshing poetry and short stories.
        </small>
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
