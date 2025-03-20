export default function About({ info }) {
  return (
    <article id="about" className="mt-4 mx-2 pt-12">
      <h1 className="font-bold text-3xl mb-2 ">About.</h1>
      <article className="max-w-5xl mx-4">
        <p>
          I am {info.name}, a Full-Stack Web Developer and Cybersecurity
          Specialist with expertise in React, Next.js, WordPress, and
          penetration testing. Passionate about crafting secure, innovative, and
          user-friendly digital experiences, I blend my skills in web
          development and cybersecurity to create robust applications that
          prioritize performance and security.
        </p>
        <br />
        <p>
          With hands-on experience in Cloudflare Workers, Clerk authentication,
          and UI/UX design with tools like Pixso and Webflow, I specialize in
          building scalable applications while ensuring strong security
          protocols. Beyond coding, I stay engaged with emerging technology,
          industry trends, and the latest advancements in cybersecurity.
        </p>
        <br />
        <p>
          Always eager to learn, build, and innovate, I take on challenging
          projects that push the boundaries of technology and security. 🚀
        </p>
      </article>
    </article>
  );
}
