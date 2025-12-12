"use client";

import dynamic from "next/dynamic";

const BackgroundRippleEffect = dynamic(
  () =>
    import("@/components/ui/background-ripple-effect").then(
      (mod) => mod.BackgroundRippleEffect
    ),
  {
    loading: () => (
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:56px_56px]"></div>
    ),
    ssr: false,
  }
);

const H2 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h2));
const Div = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div)
);

export function Background() {
  return <BackgroundRippleEffect />;
}

export function MotionH2(props: React.ComponentProps<typeof H2>) {
  return <H2 {...props} />;
}
export function MotionDiv(props: React.ComponentProps<typeof Div>) {
  return <Div {...props} />;
}
