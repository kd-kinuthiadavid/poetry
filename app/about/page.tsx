import React from "react";

const about = () => {
  return (
    <main className="flex flex-col gap-y-5 md:gap-y-10 lg:gap-y-16 justify-center h-screen lg:mx-16">
      <h1 className="heading">about</h1>
      <p className="text-xl md:text-3xl font-thin md:max-w-2xl lg:max-w-4xl text-leading mt-10">
        Hello. My name is David Kinuthia. Am a software engineer by day and a
        poet by night. This is my journal, written in poetry, prose and
        short-story form. This is an attempt at studying human experience and
        expressing that in poetry form through code.
      </p>
    </main>
  );
};

export default about;
