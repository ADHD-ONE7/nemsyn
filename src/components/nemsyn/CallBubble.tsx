import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export function CallBubble() {
  const [visible, setVisible] = useState(false);

  // The hero has its own "Ring nu" button, so the bubble only shows once the hero is out of view.
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="tel:+4555222506"
      aria-label="Ring til NemSyn på 55 22 25 06"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[color:var(--brand-red)] text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#b40e12] hover:shadow-xl md:bottom-6 md:right-6 md:h-auto md:w-auto md:px-6 md:py-3.5 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Phone size={22} className="md:h-[18px] md:w-[18px]" />
      <span className="hidden md:inline">55 22 25 06</span>
    </a>
  );
}
