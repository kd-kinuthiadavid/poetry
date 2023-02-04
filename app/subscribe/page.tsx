"use client";

import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubd, setIsSubd] = useState(false);

  function handleSubscribe() {
    // @TODO: add subscribe logic
    setIsSubd(true);
  }
  return (
    <main className="flex flex-col gap-y-5 md:gap-y-10 lg:gap-y-16 justify-center h-screen lg:mx-16">
      <h1 className="heading break-words">subscribe</h1>
      <p className="text-xl md:text-3xl font-thin md:max-w-2xl lg:max-w-4xl text-leading mt-10">
        Want to get awesome poetry and short stories straight to your inbox?
        Then subscribe to my weekly newsletter and follow me in this journey as
        we explore the human experience through poetry and prose.
      </p>
      {isSubd ? (
        <div className="flex flex-col gap-y-1 md:gap-y-3 underline text-pr-orange">
          <p className="font-bold text-3xl md:text-6xl">
            thank you for the sub.
          </p>
          <p className="text-lg md:text-3xl font-bold">
            see you in your inbox.
          </p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 gap-x-5 w-full">
          <input
            className="py-4 px-2 w-full bg-pr-black border-2 rounded-md placeholder:text-pr-white focus:ring-pr-orange focus:border-pr-orange outline-none focus:placeholder:text-pr-orange"
            type="text"
            placeholder="enter your email"
          />
          <button
            className="bg-pr-orange py-4 md:py-0 px-5 rounded-md text-pr-white text-lg font-bold hover:bg-pr-black hover:border-2 hover:border-pr-orange hover:text-pr-orange"
            onClick={handleSubscribe}
          >
            subscribe
          </button>
        </div>
      )}
    </main>
  );
};

export default Subscribe;
