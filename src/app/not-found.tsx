import { Button } from "@/components/Button";
import { GoldRule } from "@/components/GoldRule";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center sm:px-8">
      <div className="font-mono text-xs uppercase tracking-[0.18em] text-gold">404</div>
      <h1 className="mt-4 text-4xl sm:text-5xl">This Page Hasn&rsquo;t Been Built.</h1>
      <GoldRule className="my-7" />
      <p className="text-taupe">
        Whatever you were looking for isn&rsquo;t here — try the homepage, or explore Dyuti&rsquo;s
        work directly.
      </p>
      <div className="mt-9">
        <Button href="/">Back to Home</Button>
      </div>
    </section>
  );
}
