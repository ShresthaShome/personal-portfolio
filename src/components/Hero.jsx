import Links from "./Links";

export default function Hero({ name, address, contacts }) {
  return (
    <main>
      <div className="flex flex-row items-center justify-between px-5 py-5 gap-2 bg-blue-400">
        <section className="w-2/3">
          <h1 className="text-wrap text-sm min-[600px]:text-3xl sm:text-3xl md:text-4xl lg:text-6xl">
            Hi 👋
            <br />
            I'm {name} - website
            <br />
            designer and developer <br /> based in {address}.
          </h1>
        </section>
        <section className="w-1/3 flex justify-center">
          <img
            className="rounded-full min-h-[100%] border-2 border-transparent hover:border-yellow-400"
            src="src/assets/images/MyPic.jpg"
            alt={`${name}'s picture`}
          />
        </section>
      </div>
      <Links contacts={contacts} />
    </main>
  );
}
