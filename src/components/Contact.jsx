import Links from "./Links";
import Button from "./Button";

export default function Contact({ contacts }) {
  return (
    <div id="contact" className="mt-4 pt-12">
      <h1 className="font-bold text-3xl mb-2 mx-2">Contact.</h1>
      <section className="flex flex-col mx-4">
        <h1 className="capitalize font-bold text-5xl sm:text-7xl lg:text-8xl">
          LET'S WORK
          <br />
          TOGETHER
        </h1>
        <div className="my-2 ml-1 lg:ml-3">
          <Button html={`tel:${contacts.phone}`}>Contact Now</Button>
        </div>
      </section>
      <Links contacts={contacts} />
    </div>
  );
}
