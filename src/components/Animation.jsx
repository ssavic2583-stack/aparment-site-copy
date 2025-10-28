import { motion } from "framer-motion";

export default function SnakeBorderHeadline() {
  const BORDER_DURATION = 1.8;
  const CUBE_DELAY = BORDER_DURATION + 0.1;
  const TEXT_DELAY = CUBE_DELAY + 0.6;

  return (
    <div className="min-h-[40vh] grid place-items-center  force-color">
      <div className="relative inline-block">
        <div className="relative inline-block px-8 py-4">
         <motion.svg
  className="pointer-events-none absolute inset-0 h-full w-full"
  viewBox="0 0 100 40"
  preserveAspectRatio="none"
  aria-hidden
>
  <motion.rect
    x="1"
    y="1"
    width="98"
    height="38"
    rx="0"
    ry="0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    vectorEffect="non-scaling-stroke"
    shapeRendering="crispEdges"
    initial={{ pathLength: 0, opacity: 1 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 1.8, ease: "linear" }}
  />
</motion.svg>


          <motion.div
            className="pointer-events-none absolute -top-5 left-1/2 h-4 w-4 -translate-x-1/2 rounded-sm bg-amber-400"
            initial={{ y: 0, scale: 1, opacity: 1 }}
            animate={{ y: [0, -48, 0], scale: [1, 1.15, 0.6], opacity: [1, 1, 0] }}
            transition={{
              duration: 0.6,
              times: [0, 0.6, 1],
              ease: "easeOut",
              delay: CUBE_DELAY,
            }}
          />

          <motion.h2
            className="p-5 text-5xl sm:text-6xl md:text-[82px] font-luxury max-w-3xl mx-auto leading-30"
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: TEXT_DELAY }}
          >
          Explore Home That Fits Your Dreams
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
