import React from "react";

const contact = () => {
  return (
    <main className="flex flex-col gap-y-5 lg:gap-y-10 justify-center h-screen lg:mx-16">
      <h1 className="heading">contact</h1>
      <h1 className="text-3xl md:text-5xl break-words font-bold underline hover:text-pr-orange">
        kd.kinuthiadavid@gmail.com
      </h1>
      <div className="flex flex-col gap-y-10 lg:flex-row justify-between">
        <p className="text-2xl md:text-3xl font-thin md:max-w-4xl lg:max-w-2xl mt-10 text-leading">
          Like something you read? Have a cool idea and you’d like me to explore
          it? Want to commission a poem for a special occasion? Want to just say
          hi? Just shoot my an email. I always reply.
        </p>
        <div className="flex flex-row gap-x-5 lg:flex-col gap-y-5 text-2xl">
          <small className="hover:text-pr-orange underline">instagram.</small>
          <small className="hover:text-pr-orange underline">tiktok.</small>
          <small className="hover:text-pr-orange underline">twitter.</small>
        </div>
      </div>
    </main>
  );
};

export default contact;
