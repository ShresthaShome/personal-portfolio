import Card from "./Card";

export default function Works({ projects }) {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-3xl mb-2">Works.</h1>
      <section className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <Card {...project} />
        ))}
      </section>
    </div>
  );
}
