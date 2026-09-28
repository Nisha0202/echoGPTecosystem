import { INSTALL_URL } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <Reveal className="rounded-3xl bg-accent px-6 py-16 text-center text-accent-fg">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">Stop tab-hopping.</h2>
        <p className="mx-auto mt-2 max-w-sm text-accent-fg/80">Add EchoGPT to Chrome and ask every model at once.</p>
        <a href={INSTALL_URL} className="mt-7 inline-flex h-12 items-center rounded-full bg-white px-7 text-sm font-semibold text-accent">
          Add to Chrome — it's free
        </a>
      </Reveal>
    </section>
  );
}
