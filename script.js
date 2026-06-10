// GitHub Pages 서브디렉토리 지원
const BASE_PATH = (() => {
  const pathname = window.location.pathname;
  if (pathname.includes("succulent-type")) {
    return "/succulent-type/images/";
  }
  return "./images/";
})();

const IMAGE_CONFIG = {
  A: { scale: 0.69, offsetY: 0 }, B: { scale: 1.0, offsetY: 0 }, C: { scale: 1.5, offsetY: 0 },
  D: { scale: 1.3, offsetY: 0 }, E: { scale: 1.35, offsetY: 0 }, F: { scale: 1.1, offsetY: 0 },
  G: { scale: 2.1, offsetY: 0 }, H: { scale: 1.3, offsetY: 0 }, I: { scale: 1.3, offsetY: 0 },
  J: { scale: 1.0, offsetY: 0 }, K: { scale: 1.6, offsetY: 0 }, L: { scale: 1.5, offsetY: 0 },
  M: { scale: 1.28, offsetY: 0 }, N: { scale: 1.22, offsetY: 0 }, O: { scale: 1.3, offsetY: 0 },
  P: { scale: 1.5, offsetY: 0 }, Q: { scale: 1.3, offsetY: 0 }, R: { scale: 2.39, offsetY: 0 },
  S: { scale: 1.95, offsetY: 0 }, T: { scale: 1.0, offsetY: 0 }, U: { scale: 0.95, offsetY: 0 },
  V: { scale: 1.2, offsetY: 0 }, W: { scale: 1.6, offsetY: 0 }, X: { scale: 1.6, offsetY: 0 },
  Y: { scale: 1.0, offsetY: 0 }, Z: { scale: 1.0, offsetY: 0 },
  A1: { scale: 0.9, isMutant: true }, A2: { scale: 1.0, isMutant: true }, A3: { scale: 1.2, isMutant: true },
  A4: { scale: 1.3, isMutant: true }, A5: { scale: 1.4, isMutant: true }, A6: { scale: 1.6, isMutant: true },
  A7: { scale: 1.7, isMutant: true }, A8: { scale: 1.9, isMutant: true },
  A_STACK1: { scale: 0.6, isMutant: true }, A_STACK2: { scale: 0.6, isMutant: true },
  A_STACK3: { scale: 0.6, isMutant: true }, A_STACK4: { scale: 0.6, isMutant: true },
  A_STACK5: { scale: 0.6, isMutant: true }, Q1: { scale: 0.8, isMutant: true },
  IC_INTER: { scale: 1.3, isMutant: true }, AK_INTER: { scale: 1.3, isMutant: true },
  AK_INTER1: { scale: 1.9, offsetY: -50, isMutant: true }, AB_INTER: { scale: 1.3, offsetY: -10, isMutant: true },
  AC_COMBO: { scale: 1.0, isMutant: true }, AC_INTER1: { scale: 1.0, offsetY: -60, isMutant: true },
  RANDOM_CHAR: { scale: 0.93, isMutant: true }, DT_INTER: { scale: 1.4, offsetY: -5, isMutant: true },
  HT_INTER: { scale: 0.7, isMutant: true }, DT_DELAYED: { scale: 2.9, offsetY: -90, isMutant: true },
  K_INTER1: { scale: 0.9, isMutant: true }, K_INTER2: { scale: 1.3, isMutant: true }, K_INTER3: { scale: 1.9, isMutant: true },
  W1: { scale: 1.0, isMutant: true }, W2: { scale: 1.1, isMutant: true }, W3: { scale: 1.0, isMutant: true },
  W4: { scale: 0.9, isMutant: true }, W5: { scale: 1.2, isMutant: true }, W6: { scale: 1.0, isMutant: true },
  W7: { scale: 1.3, isMutant: true }, W8: { scale: 1.7, isMutant: true }, W9: { scale: 2.0, isMutant: true },
  Z2: { scale: 1.0, isMutant: true }, ECHEVERIA_MASTER: { scale: 2.8, isMutant: true }
};

const IMAGE_FALLBACK_MAP = { AC_INTER1: "AC_COMBO", W5: "W4", Z2: "Z", DT_DELAYED: "DT_INTER" };

const SPECIES_MAP = {
  A: "에케베리아 아가보이데스 크리스마스 / Echeveria agavoides Christmas", B: "홍포도 / Graptoveria Amethorum", C: "황금세덤 / Sedum acre",
  D: "천탑 / Crassula capitella", E: "수련 / Echeveria Suryeon", F: "러블리 로즈 / Graptoveria Lovely Rose",
  G: "루비틴트 / Sedum Ruby Tint", H: "비스코사 / Haworthiopsis viscosa", I: "옵투사 / Haworthia cymbiformis var. obtusa",
  J: "트리코디아데마 덴섬 / Trichodiadema densum", K: "황금사 / Mammillaria elongata", L: "하월시아 교배종 / Haworthia hyb.",
  M: "십이지권 / Haworthiopsis attenuata", N: "백화기린 / Euphorbia mammillaris cv. variegata", O: "가스테리아 백복륜금 / Gasteria White Variegated",
  P: "에케베리아 환엽 버밀리언", Q: "가스테리아 그라실리스 / Gasteria armstrongii", R: "원종 프리티금 / Echeveria cv. Rezry",
  S: "아미산 / Euphorbia gabizan", T: "오층탑 / Haworthia hyb. Manda", U: "리톱스 / Lithops", V: "리톱스 / Lithops",
  W: "리톱스 군생", X: "왕서각 꽃 / Stapelia", Y: "왕서각 / Stapelia", Z: "왕서각 군생",
  A1: "A sequence mutant", A2: "A sequence mutant", A3: "A sequence mutant", A4: "A sequence mutant",
  A5: "A sequence mutant", A6: "A sequence mutant", A7: "A sequence mutant", A8: "A sequence mutant",
  A_STACK1: "A vertical stack mutant", A_STACK2: "A vertical stack mutant", A_STACK3: "A vertical stack mutant",
  A_STACK4: "A vertical stack mutant", A_STACK5: "A vertical stack mutant", AB_INTER: "에케베리아 홍포도 변이종 / Echeveria chihuahuensis mut.",
  AC_COMBO: "A-C hybridized mutant", AC_INTER1: "A-C derived mutant", AK_INTER: "A-K intermediate mutant",
  AK_INTER1: "A-K derived mutant", IC_INTER: "I-C intermediate mutant", DT_INTER: "D-T intermediate mutant",
  HT_INTER: "H-T intermediate mutant", DT_DELAYED: "D-T delayed mutant", Q1: "Q derived mutant",
  RANDOM_CHAR: "random generated mutant", K_INTER1: "K diagonal mutant", K_INTER2: "K diagonal mutant", K_INTER3: "K diagonal mutant",
  W1: "W derived cluster", W2: "W derived cluster", W3: "W derived cluster", W4: "W derived cluster",
  W5: "W derived cluster", W6: "W derived cluster", W7: "W derived cluster", W8: "W derived cluster",
  W9: "W derived cluster", Z2: "Z derived cluster", ECHEVERIA_MASTER: "Echeveria master cluster"
};

const GENETIC_MAP = {
  A: { x: 190, y: -200 }, B: { x: 220, y: -170 }, C: { x: 70, y: -80 }, D: { x: 30, y: -50 }, E: { x: 160, y: -220 },
  F: { x: 240, y: -190 }, G: { x: 100, y: -60 }, H: { x: 140, y: -40 }, I: { x: 160, y: -20 }, J: { x: -70, y: 120 },
  K: { x: 300, y: 200 }, L: { x: 190, y: 100 }, M: { x: 70, y: 150 }, N: { x: -150, y: 150 }, O: { x: 210, y: 70 },
  P: { x: 280, y: -160 }, Q: { x: 180, y: 120 }, R: { x: 200, y: -230 }, S: { x: -110, y: 180 }, T: { x: 230, y: 90 },
  U: { x: -170, y: 220 }, V: { x: 110, y: -20 }, W: { x: -200, y: 240 }, X: { x: -250, y: 180 }, Y: { x: -270, y: 160 }, Z: { x: -230, y: 200 }
};

const GROWTH_STRUCTURE = {
  A: "rosette", B: "rosette", C: "creeping", D: "tower", E: "rosette", F: "rosette", G: "creeping", H: "radial-short",
  I: "radial-short", J: "branching", K: "cactus-column", L: "radial-short", M: "tower", N: "euphorbia-column",
  O: "fan-radial", P: "rosette", Q: "fan-radial", R: "rosette", S: "euphorbia-branch", T: "tower", U: "lithops",
  V: "lithops", W: "cluster", X: "stapelia-flower", Y: "stapelia-column", Z: "stapelia-cluster"
};

const COMPOSITE_GROWTH_STRUCTURE = {
  A: [
    { type: "echeveria-rosette", role: "dominant-apical", x: 0, y: 0, size: 1.0, rotation: 0, leafDensity: 34, curvature: 0.72 },
    { type: "inner-growth-core", role: "meristem", x: 0.06, y: -0.04, size: 0.28, rotation: 0.22, leafDensity: 10 },
    { type: "outer-aging-ring", role: "mature-leaf-band", x: 0, y: 0, size: 1.18, rotation: -0.08, leafDensity: 18, asymmetry: 0.12 }
  ],
  B: [{ type: "branch-rosette-cluster", role: "main-branch", x: 0, y: 0, size: 1.0, growth: "branching-rosette-colony", nodeCount: 5, curvature: 0.68 }],
  C: [
    { type: "sedum-mat-cluster", role: "dominant-mass", x: 0, y: 0, size: 1.0, branchDensity: 92, repetition: 0.88 },
    { type: "sedum-bean-rosette", role: "upper-branch", x: 0.42, y: -0.58, size: 0.42, rotation: 0.3 },
    { type: "sedum-bean-rosette", role: "upper-terminal", x: 0.52, y: -1.02, size: 0.38, rotation: 0.18 },
    { type: "echeveria-compact", role: "lower-anchor", x: -0.2, y: 0.95, size: 0.46, rotation: -0.12 }
  ],
  D: [
    { type: "crassula-column", role: "main-axis", x: 0, y: 0, size: 1.0, nodeCount: 34 },
    { type: "crassula-column", role: "secondary-column", x: -0.52, y: 0.74, size: 0.72, rotation: -0.22 },
    { type: "fan-petal-cluster", role: "upper-flower", x: 0.68, y: -0.82, size: 0.52 },
    { type: "fan-star-rosette", role: "terminal-geometry", x: 0.52, y: 0.32, size: 0.66, rotation: 0.2 },
    { type: "fan-star-rosette", role: "lower-terminal", x: -0.22, y: 1.22, size: 0.7, rotation: -0.16 }
  ],
  E: [
    { type: "hybrid-chain", role: "main-growth-line", x: 0, y: 0, size: 1.0, curvature: 0.82 },
    { type: "echeveria-rosette", role: "base-anchor", x: -0.32, y: 1.08, size: 0.72 },
    { type: "echeveria-red-core", role: "center-node", x: 0.18, y: 0.22, size: 0.42 },
    { type: "cup-succulent", role: "mid-structure", x: -0.08, y: -0.32, size: 0.54 },
    { type: "sedum-bean-rosette", role: "top-branch", x: 0.42, y: -0.82, size: 0.48 }
  ],
  F: [
    { type: "echeveria-chain", role: "main-branch", x: 0, y: 0, size: 1.0, curvature: -0.62 },
    { type: "echeveria-tight-rosette", role: "upper-terminal", x: 0.22, y: -1.08, size: 0.44 },
    { type: "echeveria-tight-rosette", role: "mid-node", x: -0.42, y: -0.32, size: 0.42 },
    { type: "echeveria-open-rosette", role: "lower-node", x: 0.22, y: 0.44, size: 0.52 },
    { type: "sedum-bean", role: "base-terminal", x: -0.12, y: 1.08, size: 0.58 }
  ],
  G: [
    { type: "sedum-branch-network", role: "main-structure", x: 0, y: 0, size: 1.0, density: 0.82 },
    { type: "yellow-sedum-mat", role: "core-mass", x: -0.42, y: 0.18, size: 0.94 },
    { type: "terminal-jelly-rosette", role: "outer-nodes", x: 0.68, y: -0.62, size: 0.34 },
    { type: "terminal-jelly-rosette", role: "upper-node", x: -0.22, y: -0.82, size: 0.28 }
  ],
  H: [
    { type: "haworthia-column", role: "main-spiral-axis", x: 0, y: 0, size: 1.0 },
    { type: "root-system", role: "base-network", x: 0, y: 1.18, size: 0.92, branchingDensity: 72 },
    { type: "haworthia-window", role: "mid-node", x: -0.42, y: -0.22, size: 0.46 },
    { type: "sedum-terminal", role: "lower-terminal", x: 0.62, y: 1.02, size: 0.34 }
  ],
  I: [
    { type: "haworthia-window-rosette", role: "main-core", x: 0, y: 0, size: 1.0 },
    { type: "haworthia-window-rosette", role: "upper-offset", x: 0.42, y: -0.92, size: 0.58 },
    { type: "haworthia-column", role: "base-support", x: -0.22, y: 0.82, size: 0.72 },
    { type: "root-system", role: "root-anchor", x: -0.22, y: 1.28, size: 0.94, branchingDensity: 84 }
  ],
  J: [
    { type: "cylindrical-cactus", role: "main-axis", x: 0, y: 0, size: 1.0, segmentCount: 18, curvature: 0.42 },
    { type: "root-system", role: "base-fractal", x: 0, y: 1.42, size: 1.12, branchingDensity: 124 },
    { type: "cactus-rosette-node", role: "upper-node", x: 0.18, y: -0.82, size: 0.42 },
    { type: "cactus-rosette-node", role: "mid-node", x: -0.28, y: -0.18, size: 0.38 }
  ],
  K: [
    { type: "hybrid-cactus-column", role: "main-body", x: 0, y: 0, size: 1.0, curvature: -0.42 },
    { type: "flower-node", role: "upper-red-node", x: -0.52, y: -0.72, size: 0.44 },
    { type: "rose-node", role: "terminal-red-rosette", x: 0.28, y: -1.12, size: 0.42 },
    { type: "haworthia-star", role: "right-node", x: 0.82, y: 0.12, size: 0.52 },
    { type: "green-star", role: "center-node", x: 0.12, y: 0.42, size: 0.48 },
    { type: "gold-cactus-base", role: "lower-anchor", x: 0.18, y: 1.08, size: 0.62 }
  ],
  L: [
    { type: "haworthia-window", role: "left-window-node", x: -0.82, y: 0.18, size: 0.58 },
    { type: "green-star-rosette", role: "center-core", x: -0.12, y: 0.42, size: 0.72 },
    { type: "gasteria-cluster", role: "right-branch", x: 0.84, y: -0.18, size: 0.82 },
    { type: "haworthia-window", role: "lower-node", x: -1.02, y: 1.02, size: 0.54 }
  ],
  M: [
    { type: "hybrid-column-cactus", role: "main-axis", x: 0, y: 0, size: 1.0, curvature: -0.38, segmentCount: 14 },
    { type: "flower-cup", role: "left-red-node", x: -0.72, y: -0.82, size: 0.42 },
    { type: "rose-terminal", role: "top-node", x: 0.22, y: -1.12, size: 0.38 },
    { type: "haworthia-zebra", role: "right-node", x: 0.92, y: 0.18, size: 0.54 },
    { type: "green-star", role: "center-node", x: 0.12, y: 0.62, size: 0.48 },
    { type: "gold-cactus", role: "base-node", x: 0.28, y: 1.08, size: 0.72 }
  ],
  N: [
    { type: "hybrid-cactus-column", role: "main-axis", x: 0, y: 0, size: 1.0, curvature: -0.22 },
    { type: "stacked-crassula", role: "left-spine", x: -0.82, y: -0.62, size: 0.72 },
    { type: "pink-geometry-rosette", role: "top-terminal", x: 0.18, y: -1.18, size: 0.62 },
    { type: "star-flower", role: "center-flower", x: -0.12, y: -0.08, size: 0.52 },
    { type: "gold-cactus-node", role: "lower-anchor", x: 0.18, y: 1.02, size: 0.72 },
    { type: "caudex-star-cluster", role: "right-graft", x: 1.02, y: 0.22, size: 0.64 }
  ],
  O: [
    { type: "gasteria-chain", role: "main-spline", x: 0, y: 0, size: 1.0, curvature: 0.58, segmentCount: 6 },
    { type: "star-node", role: "upper-node", x: 0.42, y: -1.02, size: 0.48 },
    { type: "broad-leaf-node", role: "middle-node", x: 0.28, y: -0.22, size: 0.62 },
    { type: "pale-leaf-terminal", role: "lower-tail", x: -0.12, y: 1.02, size: 0.72 }
  ],
  P: [
    { type: "pastel-rosette-chain", role: "main-flow", x: 0, y: 0, size: 1.0, curvature: 0.72, nodeCount: 5 },
    { type: "purple-rosette", role: "left-anchor", x: -1.12, y: 0.82, size: 0.62 },
    { type: "cream-rosette", role: "upper-terminal", x: 0.72, y: -0.82, size: 0.54 }
  ],
  Q: [
    { type: "gasteria-tower", role: "main-column", x: 0, y: 0, size: 1.0, segmentCount: 5, curvature: -0.18 },
    { type: "broad-leaf-node", role: "horizontal-interrupt", x: 0.42, y: -0.18, size: 0.58 },
    { type: "root-system", role: "base-root", x: -0.08, y: 1.28, size: 0.82 }
  ],
  R: [
    { type: "succulent-tree", role: "main-spline", x: 0, y: 0, size: 1.0, curvature: 0.84 },
    { type: "white-node", role: "mid-node", x: -0.12, y: -0.18, size: 0.48 },
    { type: "red-rosette", role: "upper-node", x: 0.52, y: -0.42, size: 0.54 },
    { type: "echeveria-terminal", role: "top-terminal", x: 1.02, y: -1.02, size: 0.58 }
  ],
  S: [
    { type: "caudex-body", role: "main-core", x: 0, y: 0, size: 1.0 },
    { type: "root-network", role: "extended-root", x: -0.42, y: 1.18, size: 1.12 },
    { type: "euphorbia-head", role: "upper-node", x: 0.52, y: -0.72, size: 0.52 },
    { type: "crystal-cluster", role: "right-node", x: 0.92, y: 0.22, size: 0.48 }
  ],
  T: [
    { type: "green-star-rosette", role: "upper-pair", x: 0, y: -0.82, size: 0.62, repeat: 2 },
    { type: "compact-rosette", role: "middle-node", x: 0, y: 0, size: 0.54 },
    { type: "rooted-star-node", role: "lower-pair", x: 0, y: 0.82, size: 0.58, repeat: 2 },
    { type: "window-leaf", role: "bottom-anchor", x: -0.12, y: 1.72, size: 0.52 }
  ],
  U: [
    { type: "split-leaf-succulent", role: "main-duality", x: 0, y: 0, size: 1.0 },
    { type: "red-column", role: "left-pole", x: -0.42, y: 0, size: 0.62 },
    { type: "green-column", role: "right-pole", x: 0.42, y: 0, size: 0.62 },
    { type: "root-base", role: "shared-anchor", x: 0, y: 0.92, size: 0.72 }
  ],
  V: [
    { type: "hybrid-cactus-column", role: "main-axis", x: 0, y: 0, size: 1.0, curvature: 0.28, segmentCount: 12 },
    { type: "lime-succulent", role: "upper-terminal", x: 0.42, y: -1.02, size: 0.52 },
    { type: "star-flower", role: "upper-flower", x: 0.92, y: -1.12, size: 0.42 },
    { type: "droplet-succulent", role: "side-node", x: 0.72, y: 0.42, size: 0.44 },
    { type: "banana-leaf-node", role: "lower-node", x: 0.22, y: 1.02, size: 0.48 }
  ],
  W: [
    { type: "lithops-colony", role: "main-cluster", x: 0, y: 0, size: 1.0, clusterDensity: 0.88 },
    { type: "star-flower", role: "upper-flower", x: 0.82, y: -0.72, size: 0.42 },
    { type: "cactus-node", role: "left-graft", x: -0.92, y: -0.08, size: 0.48 }
  ],
  X: [
    { type: "stapelia-column", role: "paired-column-body", x: 0, y: 0, size: 1.0, segmentCount: 2 },
    { type: "root-system", role: "base-root", x: 0, y: 0.92, size: 0.48 }
  ],
  Y: [{ type: "stapelia-radial-star", role: "main-body", x: 0, y: 0, size: 1.0, armCount: 18 }],
  Z: [
    { type: "stapelia-radial-star", role: "main-body", x: 0, y: 0, size: 1.0, armCount: 18 },
    { type: "star-flower", role: "surface-flower-group", x: -0.32, y: -0.08, size: 0.58, repeat: 4 }
  ],
  RANDOM_CHAR: [
    { type: "star-cactus-cluster", role: "main-radial", x: 0, y: 0, size: 1.0, armCount: 16 },
    { type: "star-flower", role: "flower-nodes", x: 0.42, y: -0.52, size: 0.42, repeat: 4 }
  ],
  Q1: [
    { type: "gasteria-rosette", role: "main-body", x: 0, y: 0, size: 1.0 },
    { type: "inner-core", role: "central-kernel", x: 0, y: 0, size: 0.42 },
    { type: "offset-clusters", role: "side-growth", x: -0.62, y: 0.18, size: 0.54 }
  ],
  K_INTER1: [
    { type: "mammillaria-network", role: "main-body", x: 0, y: 0, size: 1.0, armCount: 7 },
    { type: "central-rosette-cactus", role: "core", x: 0, y: 0, size: 0.52 },
    { type: "branch-arm", role: "radial-extensions", x: 0.62, y: 0.18, size: 0.74 }
  ],
  K_INTER2: [
    { type: "mammillaria-hybrid", role: "central-core", x: 0, y: 0, size: 1.0, armCount: 5 },
    { type: "arm-extension", role: "left-arm", x: -0.82, y: 0.22, size: 0.62 },
    { type: "arm-extension", role: "right-arm", x: 0.72, y: -0.12, size: 0.58 }
  ],
  K_INTER3: [
    { type: "white-cactus-chain", role: "main-axis", x: 0, y: 0, size: 1.0, segmentCount: 16 },
    { type: "gold-cactus-node", role: "right-cluster", x: 0.84, y: -0.18, size: 0.52 },
    { type: "gold-cactus-node", role: "lower-node", x: 0.22, y: 0.82, size: 0.62 },
    { type: "root-system", role: "base-root", x: 0.18, y: 1.22, size: 0.82 }
  ]
};

const REQUIRED_FOR_MASTER = ["A", "AB_INTER", "AC_COMBO", "DT_INTER", "B", "R", "P", "E", "F"];

const START_X = 25000;
const START_Y = 25000;
const LINE_GAP_X = 260;
const STAGE_SIZE = 50000;
const XRAY_COLOR = { r: 52, g: 42, b: 36 };

const imageCache = {};
let stage;
let input;
let distLog;
let angleLog;
let growthBranchLayer;

let collectedSet = new Set();
let masterSpawned = false;
let lastKey = null;
let lastPos = { x: START_X, y: START_Y };
let growthAngle = -90;

let wCounter = 0;
let aCounter = 0;
let zCounter = 0;
let firstASequenceSpawned = false;

let receiptRecords = [];
let typedHistory = [];

let committedSequence = "";
let currentInputSnapshot = "";
let activeTimers = [];

let currentLineIndex = 0;
let currentLineStartX = START_X;

let rebuildFrameId = null;
let lastVisualSequence = "";
let animatedTokenIndex = -1;
let renderCycle = 0;

window.addEventListener("DOMContentLoaded", init);

async function init() {
  stage = document.getElementById("render-stage");
  input = document.getElementById("succulent-input");
  distLog = document.getElementById("dist-val");
  angleLog = document.getElementById("angle-val");

  if (!stage || !input) {
    console.error("필수 요소를 찾지 못했습니다.");
    return;
  }

  ensureGrowthBranchLayer();
  ensureXrayButton();

  input.disabled = true;
  input.placeholder = "LOADING PLANTS...";

  document.getElementById("save-btn")?.addEventListener("click", captureFullStage);
  document.getElementById("decode-btn")?.addEventListener("click", toggleMutantOnly);
  document.getElementById("receipt-btn")?.addEventListener("click", toggleReceipt);
  document.getElementById("receipt-close")?.addEventListener("click", closeReceipt);
  document.getElementById("receipt-download")?.addEventListener("click", downloadReceipt);
  document.getElementById("coord-toggle")?.addEventListener("click", toggleCoordinateLayer);
  document.getElementById("growth-map-btn")?.addEventListener("click", toggleGrowthMapPanel);
  document.getElementById("growth-map-close")?.addEventListener("click", closeGrowthMapPanel);
  document.getElementById("growth-xray-btn")?.addEventListener("click", toggleGrowthXray);

  createCoordinateLayer();
  drawGrowthMapPanel();

  // 이미지 로드는 기다리지 않음 - 백그라운드에서 병렬 처리
  preloadImages();

  input.disabled = false;
  input.placeholder = "TYPE A-Z";

  input.addEventListener("keydown", handleKeydown);
  input.addEventListener("input", handleInput);
  input.focus();

  moveCamera(START_X, START_Y + window.innerHeight * 0.2, "auto");
 console.log("Cluster System ready");
}

function ensureGrowthBranchLayer() {
  growthBranchLayer = document.getElementById("growth-branch-layer");

  if (!growthBranchLayer) {
    growthBranchLayer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    growthBranchLayer.setAttribute("id", "growth-branch-layer");
    growthBranchLayer.setAttribute("width", STAGE_SIZE);
    growthBranchLayer.setAttribute("height", STAGE_SIZE);
    growthBranchLayer.setAttribute("viewBox", `0 0 ${STAGE_SIZE} ${STAGE_SIZE}`);
    growthBranchLayer.style.position = "absolute";
    growthBranchLayer.style.left = "0";
    growthBranchLayer.style.top = "0";
    growthBranchLayer.style.width = `${STAGE_SIZE}px`;
    growthBranchLayer.style.height = `${STAGE_SIZE}px`;
    growthBranchLayer.style.pointerEvents = "none";
    growthBranchLayer.style.zIndex = "999999";
    growthBranchLayer.style.display = "none";
    stage.appendChild(growthBranchLayer);
  }
}

function ensureXrayButton() {
  if (document.getElementById("growth-xray-btn")) return;

  const layer = document.getElementById("utility-layer") || document.body;
  const btn = document.createElement("button");
  btn.id = "growth-xray-btn";
  btn.type = "button";
  btn.title = "Growth X-ray";
  btn.textContent = "⌁";
  layer.appendChild(btn);
}

function preloadImages() {
  // 모든 이미지를 백그라운드에서 병렬 로드 (await 제거 = 기다리지 않음)
  // 자주 쓰는 단일 알파벳(A~Z)을 먼저 로드 → 첫 입력이 빨라짐
  const names = Object.keys(IMAGE_CONFIG).sort((a, b) => {
    const aSingle = /^[A-Z]$/.test(a) ? 0 : 1;
    const bSingle = /^[A-Z]$/.test(b) ? 0 : 1;
    return aSingle - bSingle;
  });

  names.forEach((name) => {
    const img = new Image();
    img.decoding = "async";
    img.loading = "eager";
    img.fetchPriority = "high";

    img.onload = async () => {
      try {
        if (img.decode) await img.decode();
      } catch (e) {}
      imageCache[name] = img;
    };

    img.onerror = () => {
      const fallbackName = IMAGE_FALLBACK_MAP[name];

      if (fallbackName) {
        const fallback = new Image();
        fallback.decoding = "async";
        fallback.loading = "eager";
        fallback.fetchPriority = "high";

        fallback.onload = async () => {
          try {
            if (fallback.decode) await fallback.decode();
          } catch (e) {}
          imageCache[name] = fallback;
        };

        fallback.onerror = () => {
          console.warn("이미지 로드 실패:", name);
          imageCache[name] = img;
        };

        fallback.src = `${BASE_PATH}${fallbackName}.png`;
      } else {
        console.warn("이미지 로드 실패:", name);
        imageCache[name] = img;
      }
    };

    img.src = `${BASE_PATH}${name}.png`;
  });
}

function handleKeydown(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const normalizedCurrent = normalizeInput(input.value);
    if (input.value !== normalizedCurrent) input.value = normalizedCurrent;
    currentInputSnapshot = normalizedCurrent;
    committedSequence += currentInputSnapshot + "\n";
    currentInputSnapshot = "";
    input.value = "";
    requestRebuild();
    updateDataLog(0, 90, false);
   return;
  }

  if (e.key === "Backspace" && input.value.length === 0 && committedSequence.length > 0) {
    e.preventDefault();
    committedSequence = committedSequence.slice(0, -1);
    currentInputSnapshot = "";
    requestRebuild();
    updateDataLog(0, 90, false);
  }
}

function handleInput(e) {
  const normalized = normalizeInput(e.target.value);
  if (e.target.value !== normalized) e.target.value = normalized;
  currentInputSnapshot = normalized;
  requestRebuild();
}

function normalizeInput(value) {
  return value.toUpperCase().replace(/[^A-Z?+]/g, "");
}

function requestRebuild() {
  const nextSequence = committedSequence + currentInputSnapshot;

  if (nextSequence.length === lastVisualSequence.length + 1 && nextSequence.startsWith(lastVisualSequence)) {
    animatedTokenIndex = lastVisualSequence.length;
  } else {
    animatedTokenIndex = -1;
  }

  lastVisualSequence = nextSequence;

  if (rebuildFrameId !== null) cancelAnimationFrame(rebuildFrameId);

clearTimeout(window.rebuildDelay);

window.rebuildDelay = setTimeout(() => {
  rebuildFrameId = null;
  rebuildFromSequence(nextSequence);
}, 0);
}

function clearActiveTimers() {
  activeTimers.forEach((id) => clearTimeout(id));
  activeTimers = [];
}

function scheduleNode(callback, delay, instant = false) {
  if (instant) {
    callback();
    return;
  }

  const cycle = renderCycle;
  const timerId = setTimeout(() => {
    if (cycle !== renderCycle) return;
    callback();
    activeTimers = activeTimers.filter((id) => id !== timerId);
  }, delay);

  activeTimers.push(timerId);
}

function resetRuntimeState() {
  renderCycle += 1;
  clearActiveTimers();

  currentLineIndex = 0;
  currentLineStartX = START_X;
  lastKey = null;
  lastPos = { x: START_X, y: START_Y };
  growthAngle = -90;
  wCounter = 0;
  aCounter = 0;
  zCounter = 0;
 firstASequenceSpawned = false;
  collectedSet.clear();
  masterSpawned = false;
    receiptRecords = [];
  typedHistory = [];

  if (stage) stage.querySelectorAll(".succulent-node").forEach((node) => node.remove());
  clearGlobalGrowthBranch();
}

function rebuildFromSequence(sequence) {
  resetRuntimeState();

  for (let i = 0; i < sequence.length; i++) {
    const token = sequence[i];
    if (token === "\n") {
      processLineBreak(true);
    } else {
      const shouldAnimate = i === animatedTokenIndex;
      processCharacter(token, !shouldAnimate);
    }
  }
  drawGlobalGrowthBranch();
}

function processLineBreak(isRebuild = false) {
  typedHistory.push("\n");
  currentLineIndex += 1;
  currentLineStartX = START_X + currentLineIndex * LINE_GAP_X;
  lastPos = { x: currentLineStartX, y: START_Y };
  lastKey = null;
  growthAngle = -90;
  wCounter = 0;
  aCounter = 0;
  zCounter = 0;
  firstASequenceSpawned = false;

  if (!isRebuild) moveCamera(currentLineStartX, START_Y, "auto");
}

function processCharacter(char, instant = false) {
  typedHistory.push(char);

  if (char === "?") {
    renderRandomNode("RANDOM_CHAR", char);
    checkMasterLogic("RANDOM_CHAR");
    lastKey = "?";
    wCounter = 0;
    aCounter = 0;
    zCounter = 0;
    return;
  }

  if (GENETIC_MAP[char] || char === "+") {
    if ((lastKey === "D" && char === "T") || (lastKey === "T" && char === "D")) {
      renderDTSequence(char, instant);
      checkMasterLogic("DT_INTER");
    }
   if ((lastKey === "H" && char === "T") || (lastKey === "T" && char === "H")) {
      renderIntermediateNode("HT_INTER", char, instant);
      checkMasterLogic("HT_INTER");
    }
   if ((lastKey === "I" && char === "C") || (lastKey === "C" && char === "I")) {
      renderIntermediateNode("IC_INTER", char, instant);
      checkMasterLogic("IC_INTER");
    }
   if ((lastKey === "A" && char === "C") || (lastKey === "C" && char === "A")) {
      renderACSequence(char, instant);
      checkMasterLogic("AC_COMBO");
    }
  if ((lastKey === "A" && char === "K") || (lastKey === "K" && char === "A")) {
      renderAKSequence(char, instant);
      checkMasterLogic("AK_INTER");
    }
   if ((lastKey === "A" && char === "B") || (lastKey === "B" && char === "A")) {
      renderIntermediateNode("AB_INTER", char, instant);
      checkMasterLogic("AB_INTER");
    }

    if (char === "W") {
      handleWVariant(char);
    } else if (char === "Z" && lastKey === "Z") {
      handleZVariant(char);
    } else if (char === "A" && lastKey === "A") {
      handleAVariant(char, instant);
      checkMasterLogic("A");
    } else {
      processTyping(char);      if (char === "A" && !firstASequenceSpawned) {
        firstASequenceSpawned = true;
        renderAHorizontalSequence(lastPos.x, lastPos.y, char, instant);
      }
     if (char === "K") renderKDiagonalSequence(char, instant);
    if (char === "Q") renderQSequence(lastPos.x, lastPos.y, char, instant);
     checkMasterLogic(char);
      if (char !== "A") aCounter = 0;
      if (char !== "W") wCounter = 0;
      if (char !== "Z") zCounter = 0;
    }
  }
}

function getDistanceAndAngle(prevChar, currentChar) {
  let distance = 0;
  let angle = 90;

  if (prevChar && GENETIC_MAP[prevChar] && GENETIC_MAP[currentChar] && currentChar !== prevChar) {
    const p1 = GENETIC_MAP[prevChar];
   const p2 = GENETIC_MAP[currentChar];
    distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
   if (distance < 60) angle = 90;
    else if (distance < 140) angle = 75;
    else if (distance < 240) angle = 60;
    else if (distance < 350) angle = 45;
    else if (distance < 500) angle = 30;
    else angle = 15;
  }

  return { distance, angle };
}

function processTyping(char) {
  const prevChar = lastKey;
  const { distance, angle } = getDistanceAndAngle(prevChar, char);
 const { nX, nY, rot } = calculateCoords(distance, angle, char === lastKey);
 createSucculentElement(char, nX, nY, rot, char, prevChar, distance, angle);
  lastPos = { x: nX, y: nY };
  moveCamera(nX, nY, "auto");
  updateDataLog(distance, angle, char === lastKey);
  lastKey = char;
}

function renderAHorizontalSequence(baseX, baseY, sourceInput = "A", instant = false) {
  const spacing = 230;
  const aImages = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"];

  for (let i = 0; i < aImages.length; i++) {
    scheduleNode(() => {
      createSucculentElement(aImages[i], baseX + spacing * (i + 1), baseY, 0, sourceInput, "A", null, null);
    }, 120 * (i + 1), instant);
  }
}

function handleAVariant(sourceInput = "A", instant = false) {
  aCounter = (aCounter % 5) + 1;
  const imgName = `A_STACK${aCounter}`;
  const nX = lastPos.x;
  const nY = lastPos.y - 95;

  scheduleNode(() => {
    createSucculentElement(imgName, nX, nY, 0, sourceInput, "A", 0, 90);
  }, 180, instant);

  lastPos = { x: nX, y: nY };
  moveCamera(nX, nY, "auto");
  lastKey = "A";
  wCounter = 0;
  zCounter = 0;
}

function handleZVariant(sourceInput = "Z") {
  zCounter = (zCounter % 2) + 1;
  const imgName = zCounter === 1 ? "Z2" : "Z";
  const nX = lastPos.x + 120;
const nY = lastPos.y + 20;
 createSucculentElement(imgName, nX, nY, 0, sourceInput, "Z", 0, 90);
  lastPos = { x: nX, y: nY };
moveCamera(nX, nY, "auto");
  lastKey = "Z";
  wCounter = 0;
  aCounter = 0;
}

function renderACSequence(sourceInput = "C", instant = false) {
  renderIntermediateNode("AC_COMBO", sourceInput, instant);
  scheduleNode(() => {
    createSucculentElement("AC_INTER1", lastPos.x, lastPos.y - 120, 0, sourceInput, "A/C", null, null);
  }, 500, instant);
}

function renderAKSequence(sourceInput = "K", instant = false) {
  createSucculentElement("AK_INTER", lastPos.x, lastPos.y - 70, 0, sourceInput, "A/K", null, null);
  scheduleNode(() => {
    createSucculentElement("AK_INTER1", lastPos.x, lastPos.y - 140, 0, sourceInput, "A/K", null, null);
  }, 500, instant);
}

function renderQSequence(baseX, baseY, sourceInput = "Q", instant = false) {
  scheduleNode(() => {
    createSucculentElement("Q1", baseX + 180, baseY, 0, sourceInput, "Q", null, null);
  }, 250, instant);
}

function renderDTSequence(sourceInput = "T", instant = false) {
   createSucculentElement("DT_INTER", lastPos.x, lastPos.y - 70, 0, sourceInput, "D/T", null, null);
  scheduleNode(() => {
    createSucculentElement("DT_DELAYED", lastPos.x, lastPos.y - 90, 0, sourceInput, "D/T", null, null);
    checkMasterLogic("DT_DELAYED");
  }, 800, instant);
}

function renderKDiagonalSequence(sourceInput = "K", instant = false) {
  const angle = Math.atan2(GENETIC_MAP.K.y, GENETIC_MAP.K.x);
  const kImages = ["K_INTER1", "K_INTER2", "K_INTER3"];

  for (let i = 0; i < 3; i++) {
    scheduleNode(() => {
      const nX = lastPos.x + Math.cos(angle) * 195 * (i + 1);
      const nY = lastPos.y + Math.sin(angle) * 195 * (i + 1);
      createSucculentElement(kImages[i], nX, nY, 0, sourceInput, "K", null, null);
    }, 120 * (i + 1), instant);
  }
}

function handleWVariant(sourceInput = "W") {
  let imgName;
  let nX;
  let nY;

  if (lastKey !== "W") {
    wCounter = 0;
    imgName = "W";
    const coords = calculateCoords(0, 90, false);
    nX = coords.nX;
    nY = coords.nY;
  } else {
    wCounter = (wCounter % 9) + 1;
    imgName = `W${wCounter}`;
    nX = lastPos.x;
    nY = lastPos.y - 80;
  }

  createSucculentElement(imgName, nX, nY, 0, sourceInput, lastKey, 0, 90);
  
  lastPos = { x: nX, y: nY };
  moveCamera(nX, nY, "auto");
 
  lastKey = "W";
  checkMasterLogic("W");
  aCounter = 0;
  zCounter = 0;
}

function renderIntermediateNode(imgName, sourceInput = "-", instant = false) {
  const x = lastPos.x + Math.random() * 60 - 30;
  const y = lastPos.y - 70;
  const prev = lastKey;
  scheduleNode(() => {
    createSucculentElement(imgName, x, y, 0, sourceInput, prev, null, null);
  }, 160, instant);
}

function renderRandomNode(imgName, sourceInput = "?") {
  createSucculentElement(
    imgName,
    window.scrollX + Math.random() * window.innerWidth,
    window.scrollY + Math.random() * window.innerHeight,
    Math.random() * 360,
    sourceInput,
    lastKey,
    null,
    null
  );
}

function createSucculentElement(imgName, x, y, rot, sourceInput = "-", prevInput = "-", distance = null, angle = null) {
  if (!stage) return;

  const node = document.createElement("div");
  node.className = "succulent-node";

  const config = IMAGE_CONFIG[imgName] || { scale: 1.0, offsetY: 0, isMutant: false };
  node.classList.add(config.isMutant ? "mutant-type" : "normal-type");
  node.style.zIndex = imgName.includes("INTER") || imgName === "DT_DELAYED" ? 9000 : Math.floor(5000 - (y - START_Y));

  recordReceipt(imgName, x, y, rot, sourceInput, prevInput, distance, angle, config);

  const cachedImg = imageCache[imgName];
  const img = cachedImg ? cachedImg.cloneNode(false) : new Image();
  const baseWidth = 320 * config.scale;

  img.decoding = "async";
  img.loading = "eager";
  img.fetchPriority = "high";
  img.style.width = `${baseWidth}px`;
  img.style.height = "auto";
  img.draggable = false;

  node.style.left = `${x - baseWidth / 2}px`;
  node.style.top = `${y - baseWidth / 2 + (config.offsetY || 0)}px`;
  node.style.transform = `rotate(${rot}deg)`;

  // 이미지를 로드 완료 후에 DOM에 추가하는 함수
  const addToStage = () => {
    node.appendChild(img);
    stage.appendChild(node);
  };

  img.onerror = () => {
    const fallbackName = IMAGE_FALLBACK_MAP[imgName] || "A";
    if (img.dataset.fallbackTried === "true") {
      img.style.display = "none";
      node.innerHTML = `<span style="color:#000; font-size:10px; background:#fff; border:1px solid red;">Missing: ${imgName}</span>`;
      console.warn("Missing image:", imgName);
      addToStage();
      return;
    }

    img.dataset.fallbackTried = "true";
    img.src = imageCache[fallbackName]?.src || `${BASE_PATH}${fallbackName}.png`;
    console.warn(`Missing image: ${imgName}. Fallback to ${fallbackName}.`);
  };

  if (cachedImg) {
    // 캐시가 있으면 이미 로드됨 → 바로 DOM 추가
    addToStage();
  } else {
    // 캐시가 없으면 로드 완료 후 DOM 추가
    img.onload = () => {
      addToStage();
    };
    img.src = `${BASE_PATH}${imgName}.png`;
  }
}

function recordReceipt(imgName, x, y, rot, sourceInput, prevInput, distance, angle, config) {
  const genetic = GENETIC_MAP[sourceInput] || GENETIC_MAP[imgName] || null;

  receiptRecords.push({
    no: receiptRecords.length + 1,
    input: sourceInput,
    previous: prevInput || "-",
    image: imgName,
    species: SPECIES_MAP[imgName] || SPECIES_MAP[sourceInput] || imgName,
    type: config.isMutant ? "MUTANT / HYBRIDIZED" : "BASE",
    geneticX: genetic ? genetic.x : "-",
    geneticY: genetic ? genetic.y : "-",
    distance: distance === null ? "-" : Math.round(distance),
    angle: angle === null ? "-" : `${angle}°`,
    stageX: Math.round(x - START_X),
    stageY: Math.round(START_Y - y),
    rotation: `${Math.round(rot)}°`
  });

  updateReceiptIfOpen();
}

function buildReceiptText() {
  const lines = [];
  
  const inputSequence = typedHistory.join("").replace(/\n/g, " ↵ ");
  lines.push("==========================================");
  lines.push("        SUCCULENT GENETIC RECEIPT");
  lines.push("==========================================");
  lines.push(`INPUT SEQUENCE : ${inputSequence || "-"}`);
  lines.push(`TOTAL RECORDS  : ${receiptRecords.length}`);
  lines.push(`DATE           : ${new Date().toLocaleString()}`);
  lines.push("------------------------------------------");

  receiptRecords.forEach((item) => {
    lines.push(`#${String(item.no).padStart(3, "0")}`);
    lines.push(`TYPE      : ${item.type}`);
    lines.push(`INPUT     : ${item.input}`);
    lines.push(`PREVIOUS  : ${item.previous}`);
    lines.push(`IMAGE     : ${item.image}`);
    lines.push(`SPECIES   : ${item.species}`);
    lines.push(`GENETIC   : x ${item.geneticX}, y ${item.geneticY}`);
    lines.push(`DISTANCE  : ${item.distance}`);
    lines.push(`ANGLE     : ${item.angle}`);
    lines.push(`POSITION  : x ${item.stageX}, y ${item.stageY}`);
    lines.push(`ROTATION  : ${item.rotation}`);
    lines.push("------------------------------------------");
  });

  lines.push("          END OF GERMINATION");
  lines.push("==========================================");
 
  return lines.join("\n");
}

function updateReceiptIfOpen() {
  const panel = document.getElementById("receipt-panel");
 
  const content = document.getElementById("receipt-content");
  if (!panel || !content) return;
 
  if (panel.classList.contains("show")) {
    content.textContent = buildReceiptText();
    content.scrollTop = content.scrollHeight;
  }
}

function toggleReceipt() {
  
  const panel = document.getElementById("receipt-panel");
  const content = document.getElementById("receipt-content");
 
  if (!panel || !content) return;

  if (panel.classList.contains("show")) {
    panel.classList.remove("show");
  } else {
    content.textContent = buildReceiptText();
    panel.classList.add("show");
    content.scrollTop = content.scrollHeight;
  }
}

function closeReceipt() {
  const panel = document.getElementById("receipt-panel");
  if (panel) panel.classList.remove("show");
}

function downloadReceipt() {
  const text = buildReceiptText();
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `succulent_genetic_receipt_${Date.now()}.txt`;
  link.click();
 
  URL.revokeObjectURL(link.href);
}

function calculateCoords(dist, angle, isSame) {
  const step = 108;
  const sameStep = 72;

  if (lastKey === null) {
    growthAngle = -90;
    return { nX: lastPos.x, nY: lastPos.y, rot: 0 };
  }

  if (isSame) {
    const side = Math.sin(typedHistory.length * 1.7) > 0 ? 1 : -1;
    const curve = Math.sin(typedHistory.length * 0.9) * 14;
    return { nX: lastPos.x + side * sameStep, nY: lastPos.y - 26 + curve * 0.15, rot: side * 7 };
  }

  const geneticInfluence = Math.max(8, Math.min(42, angle * 0.42));
  const wave = Math.sin(typedHistory.length * 0.82) * 9;
  const side = Math.cos(typedHistory.length * 1.13) > 0 ? 1 : -1;
  growthAngle += side * geneticInfluence * 0.18 + wave * 0.35;
  growthAngle = Math.max(-128, Math.min(-52, growthAngle));
  const rad = (growthAngle * Math.PI) / 180;

  return {
    nX: lastPos.x + Math.cos(rad) * step,
    nY: lastPos.y + Math.sin(rad) * step,
    rot: growthAngle + 90
  };
}

function moveCamera(x, y, behavior = "auto") {
  window.scrollTo({ left: x - window.innerWidth / 2, top: y - window.innerHeight * 0.35, behavior });
}

function updateDataLog(dist, angle, isSame) {
  
  if (!distLog || !angleLog) return;
  distLog.innerText = isSame ? "CLUSTER" : `${Math.round(dist)}mm`;
  angleLog.innerText = isSame ? "GROWTH" : `${angle}°`;
}

async function captureFullStage() {

  console.time("SAVE");

  // X-Ray 모드면 초록 골격(SVG) 레이어를 따로 저장
  if (document.body.classList.contains("xray-active")) {
    await captureXrayStage();
    console.timeEnd("SAVE");
    return;
  }

  const nodes = [...document.querySelectorAll(".succulent-node")];
  const MAX_SAVE_NODES = 250;

if (nodes.length > MAX_SAVE_NODES) {
  nodes.splice(0, nodes.length - MAX_SAVE_NODES);
}
  if (nodes.length === 0) return;

 
  const saveBtn = document.getElementById("save-btn");
  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.textContent = "...";
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  nodes.forEach((node) => {
    const left = parseFloat(node.style.left);
    const top = parseFloat(node.style.top);
   
    const img = node.querySelector("img");
    const width = img ? img.offsetWidth : 600;
  
    const height = img ? img.offsetHeight : 600;
    minX = Math.min(minX, left);
    minY = Math.min(minY, top);
    maxX = Math.max(maxX, left + width);
    maxY = Math.max(maxY, top + height);
  });

  const padding = 300;
  
  const captureWidth = Math.ceil(maxX - minX + padding * 2);

  const captureHeight = Math.ceil(maxY - minY + padding * 2);
  
  
  const captureBox = document.createElement("div");
  captureBox.style.position = "fixed";
  captureBox.style.left = "-99999px";
  captureBox.style.top = "0";
  captureBox.style.width = `${captureWidth}px`;
  captureBox.style.height = `${captureHeight}px`;
  captureBox.style.background = "#ffffff";
  captureBox.style.overflow = "hidden";

  nodes.forEach((node) => {
  
    const clone = node.cloneNode(true);
    const originalLeft = parseFloat(node.style.left);    const originalTop = parseFloat(node.style.top);
    clone.style.left = `${originalLeft - minX + padding}px`;    clone.style.top = `${originalTop - minY + padding}px`;
    captureBox.appendChild(clone);
  });

  document.body.appendChild(captureBox);

await new Promise(resolve => setTimeout(resolve, 1500));

  try {
    if (typeof html2canvas === "undefined") {
      console.error("html2canvas가 로드되지 않았습니다.");
      return;
    }

   const canvas = await html2canvas(
  captureBox,
  {
      backgroundColor:"#ffffff",
      useCORS:true,
      scale:1
  }
);
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `succulent_${Date.now()}.png`;
    link.click();
  } catch (err) {
    console.error("Save failed:", err);
  } finally {
    console.timeEnd("SAVE");
    captureBox.remove();
   if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.textContent = "↓";
    }
  }
}

async function captureXrayStage() {
  const saveBtn = document.getElementById("save-btn");
  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.textContent = "...";
  }

  try {
    if (!growthBranchLayer || receiptRecords.length === 0) return;

    // 식물이 그려진 좌표 범위 계산 (SVG는 화면 전체 좌표 기준)
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    receiptRecords.forEach((item) => {
      const x = START_X + item.stageX;
      const y = START_Y - item.stageY;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    });

    const padding = 300;
    const boxX = minX - padding;
    const boxY = minY - padding;
    const boxW = Math.ceil(maxX - minX + padding * 2);
    const boxH = Math.ceil(maxY - minY + padding * 2);

    // 골격 SVG 내용을 복제해 딱 맞는 크기의 새 SVG로 감쌈
    const svgNS = "http://www.w3.org/2000/svg";
    const exportSvg = document.createElementNS(svgNS, "svg");
    exportSvg.setAttribute("xmlns", svgNS);
    exportSvg.setAttribute("width", boxW);
    exportSvg.setAttribute("height", boxH);
    exportSvg.setAttribute("viewBox", `${boxX} ${boxY} ${boxW} ${boxH}`);

    // 흰 배경
    const bg = document.createElementNS(svgNS, "rect");
    bg.setAttribute("x", boxX);
    bg.setAttribute("y", boxY);
    bg.setAttribute("width", boxW);
    bg.setAttribute("height", boxH);
    bg.setAttribute("fill", "#ffffff");
    exportSvg.appendChild(bg);

    // 골격 선들을 복제 + 초록색 스타일을 인라인으로 직접 지정
    [...growthBranchLayer.childNodes].forEach((child) => {
      if (child.nodeType !== 1) return;
      const c = child.cloneNode(true);
      applyXrayInlineStyle(c);
      exportSvg.appendChild(c);
    });

    // SVG → 이미지 → 캔버스 → PNG
    const svgString = new XMLSerializer().serializeToString(exportSvg);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    await new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = boxW;
        canvas.height = boxH;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, boxW, boxH);
        ctx.drawImage(image, 0, 0);
        URL.revokeObjectURL(url);

        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `succulent_xray_${Date.now()}.png`;
        link.click();
        resolve();
      };
      image.onerror = reject;
      image.src = url;
    });
  } catch (err) {
    console.error("X-Ray save failed:", err);
  } finally {
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.textContent = "↓";
    }
  }
}

// 골격 요소에 초록색 스타일을 인라인으로 적용 (CSS가 안 따라오므로 직접 지정)
function applyXrayInlineStyle(el) {
  if (el.nodeType !== 1) return;
  const tag = el.tagName.toLowerCase();
  if (["path", "line", "ellipse", "circle"].includes(tag)) {
    const isDot = el.classList && el.classList.contains("growth-dot");
    if (isDot) {
      el.setAttribute("fill", "rgb(60, 150, 80)");
      el.setAttribute("stroke", "none");
    } else {
      el.setAttribute("fill", "none");
      el.setAttribute("stroke", "rgb(60, 150, 80)");
      el.setAttribute("stroke-width", "1.5");
    }
  }
  [...el.childNodes].forEach(applyXrayInlineStyle);
}

function toggleMutantOnly() {
  stage.classList.toggle("only-mutant-view");
 const btn = document.getElementById("decode-btn");
  if (!btn) return;
  btn.textContent = stage.classList.contains("only-mutant-view") ? "[NORMAL VIEW]" : "[MUTANT VIEW]";
}

function checkMasterLogic(name) {
  collectedSet.add(name);
 if (masterSpawned) return;
  const ready = REQUIRED_FOR_MASTER.every((item) => collectedSet.has(item));

  if (ready) {
    masterSpawned = true;
    createSucculentElement("ECHEVERIA_MASTER", lastPos.x, lastPos.y - 240, 0, "MASTER", "SYSTEM", null, null);
  }
}

function toggleCoordinateLayer() {
  const coordLayer = document.getElementById("coord-layer");
  const btn = document.getElementById("coord-toggle");
 if (!coordLayer || !btn) return;
  coordLayer.classList.toggle("show");
  btn.classList.toggle("active");
}

function createCoordinateLayer() {
  const coordLayer = document.getElementById("coord-layer");
    if (!coordLayer) return;
    coordLayer.innerHTML = "";

  const spacing = 220;
const labelSpacing = 1000;

  for (let x = 0; x <= STAGE_SIZE; x += spacing) {
    const line = document.createElement("div");
    line.className = "coord-line vertical";
    if (x === START_X) line.classList.add("coord-axis");
    line.style.left = `${x}px`;
    line.style.top = "0px";
    coordLayer.appendChild(line);

    if (x % labelSpacing === 0) {
      const label = document.createElement("div");
      label.className = "coord-label";
      label.style.left = `${x + 5}px`;
      label.style.top = `${START_Y + 8}px`;
      label.innerText = `x ${x - START_X}`;
      coordLayer.appendChild(label);
    }
  }

  for (let y = 0; y <= STAGE_SIZE; y += spacing) {
    const line = document.createElement("div");
    line.className = "coord-line horizontal";
    if (y === START_Y) line.classList.add("coord-axis");
    line.style.left = "0px";
    line.style.top = `${y}px`;
    coordLayer.appendChild(line);

    if (y % labelSpacing === 0) {
      const label = document.createElement("div");
      label.className = "coord-label";
      label.style.left = `${START_X + 8}px`;
      label.style.top = `${y + 5}px`;
      label.innerText = `y ${START_Y - y}`;
      coordLayer.appendChild(label);
    }
  }
}

function toggleGrowthMapPanel() {
  const panel = document.getElementById("growth-map-panel");
  const btn = document.getElementById("growth-map-btn");
  if (!panel || !btn) return;
  panel.classList.toggle("show");
  btn.classList.toggle("active", panel.classList.contains("show"));
  drawGrowthMapPanel();
  updateGrowthMapTypedPath();
}

function closeGrowthMapPanel() {
  const panel = document.getElementById("growth-map-panel");
  const btn = document.getElementById("growth-map-btn");
  if (panel) panel.classList.remove("show");
  if (btn) btn.classList.remove("active");
}

function drawGrowthMapPanel() {
  const svg = document.getElementById("growth-map-svg");
  if (!svg) return;
  svg.innerHTML = "";
  const centerX = 260;
  const centerY = 260;
  const scale = 0.78;
  addMapLine(svg, 30, centerY, 490, centerY, 0.22);
  addMapLine(svg, centerX, 30, centerX, 490, 0.22);

  Object.keys(GENETIC_MAP).forEach((key) => {
    const p = GENETIC_MAP[key];
    const x = centerX + p.x * scale;
    const y = centerY - p.y * scale;
    addMapCircle(svg, x, y, 4, key);
    addMapText(svg, key, x + 8, y + 4);
  });
}

function updateGrowthMapTypedPath() {
  const svg = document.getElementById("growth-map-svg");
  if (!svg) return;
  svg.querySelectorAll(".typed-path").forEach((el) => el.remove());
  const centerX = 260;
  const centerY = 260;
  const scale = 0.78;
  const typedLetters = typedHistory.filter((v) => GENETIC_MAP[v]);

  for (let i = 1; i < typedLetters.length; i++) {
    const prev = GENETIC_MAP[typedLetters[i - 1]];
    const curr = GENETIC_MAP[typedLetters[i]];
    addMapLine(svg, centerX + prev.x * scale, centerY - prev.y * scale, centerX + curr.x * scale, centerY - curr.y * scale, 0.62, "typed-path");
  }
}

function addMapLine(svg, x1, y1, x2, y2, opacity = 0.35, className = "") {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", `rgba(${XRAY_COLOR.r},${XRAY_COLOR.g},${XRAY_COLOR.b},${opacity})`);
  line.setAttribute("stroke-width", className === "typed-path" ? "1.8" : "1.1");
  if (className) line.setAttribute("class", className);
  svg.insertBefore(line, svg.firstChild);
}

function addMapCircle(svg, x, y, r, key) {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", r);
  circle.setAttribute("data-key", key);
  svg.appendChild(circle);
}

function addMapText(svg, text, x, y) {
  const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  label.setAttribute("x", x);
  label.setAttribute("y", y);
  label.textContent = text;
  svg.appendChild(label);
}

function toggleGrowthXray() {
  const btn = document.getElementById("growth-xray-btn");
  document.body.classList.toggle("xray-active");
  if (btn) btn.classList.toggle("active", document.body.classList.contains("xray-active"));
  if (growthBranchLayer) growthBranchLayer.style.display = document.body.classList.contains("xray-active") ? "block" : "none";
  drawGlobalGrowthBranch();
}

function getSkeletonBaseChar(sourceInput, imgName) {
  if (GENETIC_MAP[sourceInput]) return sourceInput;
  const fromImage = String(imgName || "").charAt(0);
  if (GENETIC_MAP[fromImage]) return fromImage;
  return "A";
}

function clearGlobalGrowthBranch() {
  if (!growthBranchLayer) return;
  growthBranchLayer.innerHTML = "";
  if (receiptRecords.length > 250) return;
}

function drawGlobalGrowthBranch() {
  if (!growthBranchLayer) return;
  growthBranchLayer.innerHTML = "";

  if (!document.body.classList.contains("xray-active")) {
    growthBranchLayer.style.display = "none";
    return;
  }

  growthBranchLayer.style.display = "block";

  const points = receiptRecords.map((item, index) => ({
    x: START_X + item.stageX,
    y: START_Y - item.stageY,
    input: item.input,
    image: item.image,
    index
  }));
  if (points.length > 500) {
  points.length = 500;
}

  if (points.length === 0) return;

  branchCircle(points[0].x, points[0].y, 5.2, true);

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const dx = curr.x - prev.x;
    const dy = curr.y - prev.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    const cx1 = prev.x + Math.cos(angle - 0.55) * dist * 0.35 + Math.sin(i * 0.8) * 34;
    const cy1 = prev.y + Math.sin(angle - 0.55) * dist * 0.35 - 64;
    const cx2 = prev.x + Math.cos(angle + 0.35) * dist * 0.72 + Math.cos(i * 0.5) * 48;
    const cy2 = prev.y + Math.sin(angle + 0.35) * dist * 0.72 - 78;

    branchPath(`M ${prev.x} ${prev.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr.x} ${curr.y}`, 0.42, 1.65);
   if (points.length < 120) {
  drawGrowthAlongBranch(prev, curr, i);
} 
  }

  points.forEach((p) => {
    branchCircle(p.x, p.y, 4.8, true);
    drawCompositePlantAtNode(p.input, p.image, p.x, p.y, p.index * 0.34, p.index);
  });
}

function drawGrowthAlongBranch(prev, curr, index) {
  const dx = curr.x - prev.x;
  const dy = curr.y - prev.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx);
  const count = Math.max(3, Math.min(10, Math.floor(dist / 58)));

  for (let j = 1; j <= count; j++) {
    const t = j / (count + 1);
    const bx = prev.x + dx * t;
    const by = prev.y + dy * t - Math.sin(t * Math.PI) * 38;
    const side = j % 2 === 0 ? 1 : -1;
    const len = 42 + Math.sin(index + j) * 18;
    const a = angle + side * (0.78 + j * 0.04);
    const ex = bx + Math.cos(a) * len;
    const ey = by + Math.sin(a) * len;

    branchPath(`M ${bx} ${by} Q ${(bx + ex) / 2} ${by - 18} ${ex} ${ey}`, 0.28, 0.95);
    branchCircle(ex, ey, 1.8, true);
  }
}

function drawCompositePlantAtNode(input, imageName, x, y, angle = 0, index = 0) {
  const key = COMPOSITE_GROWTH_STRUCTURE[imageName]
    ? imageName
    : COMPOSITE_GROWTH_STRUCTURE[input]
      ? input
      : null;

  if (!key) {
    const baseChar = getSkeletonBaseChar(input, imageName);
    const fallbackType = GROWTH_STRUCTURE[baseChar] || "branching";
    drawPlantPartByType(fallbackType, x, y, getGlobalPlantSize(fallbackType, imageName) * 1.25, angle, {}, index);
    return;
  }

  const structures = COMPOSITE_GROWTH_STRUCTURE[key];
  const baseSize = getCompositeBaseSize(imageName, key);
  const origin = { x, y };
  let previousPoint = origin;

  structures.forEach((part, i) => {
    const repeat = Math.max(1, part.repeat || 1);

    for (let r = 0; r < repeat; r++) {
      const repeatAngle = repeat > 1 ? (Math.PI * 2 * r) / repeat : 0;
      const spread = repeat > 1 ? 0.18 + r * 0.02 : 0;
      const px = x + (part.x + Math.cos(repeatAngle) * spread) * baseSize;
      const py = y + (part.y + Math.sin(repeatAngle) * spread) * baseSize;
      const pSize = baseSize * (part.size || 1) * 0.78;
      const pAngle = angle + (part.rotation || 0) + i * 0.17 + repeatAngle * 0.2;

      if (i > 0 || r > 0) {
        const midX = (previousPoint.x + px) / 2 + Math.sin(index + i + r) * 18;
        const midY = (previousPoint.y + py) / 2 - 34;
        branchPath(`M ${previousPoint.x} ${previousPoint.y} Q ${midX} ${midY} ${px} ${py}`, 0.32, 1.1);
      }

      drawPlantPartByType(part.type, px, py, pSize, pAngle, part, index + i + r);
      previousPoint = { x: px, y: py };
    }
  });
}

function getCompositeBaseSize(imageName, key) {
  const config = IMAGE_CONFIG[imageName] || IMAGE_CONFIG[key] || { scale: 1 };
  return Math.max(90, Math.min(210, 118 * (config.scale || 1)));
}

function drawPlantPartByType(type, x, y, size, angle = 0, part = {}, seed = 0) {
  if (["echeveria-rosette", "echeveria-compact", "echeveria-tight-rosette", "echeveria-open-rosette", "purple-rosette", "cream-rosette", "red-rosette", "echeveria-terminal", "inner-growth-core", "outer-aging-ring", "echeveria-red-core", "pastel-rosette-chain", "succulent-tree", "branch-rosette-cluster", "sedum-bean-rosette", "terminal-jelly-rosette", "lime-succulent", "droplet-succulent"].includes(type)) {
    drawEcheveriaRosette(x, y, size, angle, part.leafDensity || 26);
    return;
  }

  if (["sedum-mat-cluster", "yellow-sedum-mat", "sedum-branch-network", "mammillaria-network", "mammillaria-hybrid", "star-cactus-cluster", "caudex-star-cluster"].includes(type)) {
    drawGlobalFractalCluster(x, y, size, angle);
    return;
  }

  if (["crassula-column", "stacked-crassula", "haworthia-column", "gasteria-tower", "white-cactus-chain", "hybrid-chain", "echeveria-chain", "gasteria-chain"].includes(type)) {
    drawOrganicStemChain(x, y, size, angle, part.segmentCount || part.nodeCount || 8);
    return;
  }

  if (["root-system", "root-network", "root-base"].includes(type)) {
    drawRootNetwork(x, y, size, seed);
    return;
  }

  if (["lithops-colony", "split-leaf-succulent", "lithops-radial-colony", "gasteria-rosette", "smooth-lithops-cluster", "mixed-lithops-colony", "pink-conophytum-colony"].includes(type)) {
    drawLithopsColony(x, y, size, seed, part.clusterDensity || 0.8);
    return;
  }

  if (["star-flower", "flower-node", "flower-cup", "rose-terminal", "stapelia-flower"].includes(type)) {
    drawGlobalStapeliaFlower(x, y, size, angle);
    return;
  }

  if (["hybrid-cactus-column", "hybrid-column-cactus", "cylindrical-cactus", "stapelia-column", "cactus-node", "gold-cactus-node", "gold-cactus-base", "gold-cactus", "cactus-rosette-node", "central-rosette-cactus"].includes(type)) {
    drawCactusStructure(x, y, size, angle, part.segmentCount || 10);
    return;
  }

  if (["haworthia-window", "haworthia-window-rosette", "green-star", "green-star-rosette", "haworthia-star", "haworthia-zebra", "compact-rosette", "rooted-star-node", "pink-geometry-rosette", "fan-star-rosette", "star-node"].includes(type)) {
    drawSpikyRadialRosette(x, y, size, angle, part.armCount || 12);
    return;
  }

  if (["gasteria-cluster", "broad-leaf-node", "pale-leaf-terminal", "fan-petal-cluster", "cup-succulent", "banana-leaf-node", "window-leaf"].includes(type)) {
    drawGlobalFan(x, y, size, angle);
    return;
  }

  if (["stapelia-radial-star", "branch-arm", "arm-extension"].includes(type)) {
    drawGlobalRadial(x, y, size, part.armCount || 18, angle);
    return;
  }

  drawGlobalBranching(x, y, size);
}

function branchEl(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  growthBranchLayer.appendChild(el);
  return el;
}

function xrayStroke(opacity) {
  return `rgba(${XRAY_COLOR.r},${XRAY_COLOR.g},${XRAY_COLOR.b},${opacity})`;
}

function branchPath(d, opacity = 0.72, width = 1.25) {
  branchEl("path", {
    d,
    fill: "none",
    stroke: xrayStroke(opacity),
    "stroke-width": width,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "vector-effect": "non-scaling-stroke"
  });
}

function branchLine(x1, y1, x2, y2, opacity = 0.72, width = 1.25) {
  branchEl("line", {
    x1,
    y1,
    x2,
    y2,
    stroke: xrayStroke(opacity),
    "stroke-width": width,
    "stroke-linecap": "round",
    "vector-effect": "non-scaling-stroke"
  });
}

function branchCircle(x, y, r = 3, filled = false) {
  branchEl("circle", {
    cx: x,
    cy: y,
    r,
    class: filled ? "growth-dot" : "",
    fill: filled ? xrayStroke(0.9) : "none",
    stroke: filled ? "none" : xrayStroke(0.45),
    "stroke-width": 1.2
  });
}

function branchEllipse(x, y, rx, ry, rot = 0, opacity = 0.72) {
  branchEl("ellipse", {
    cx: x,
    cy: y,
    rx,
    ry,
    transform: `rotate(${rot} ${x} ${y})`,
    fill: "none",
    stroke: xrayStroke(opacity),
    "stroke-width": 1.15,
    "stroke-linecap": "round",
    "vector-effect": "non-scaling-stroke"
  });
}

function getGlobalPlantSize(type, imageName) {
  if (String(imageName).includes("INTER")) return 96;
  if (type === "rosette") return 130;
  if (type === "cluster" || type === "stapelia-cluster") return 125;
  if (type === "creeping") return 110;
  if (type === "tower") return 118;
  if (type === "cactus-column" || type === "euphorbia-column" || type === "stapelia-column") return 128;
  return 112;
}

function drawEcheveriaRosette(x, y, size, rotation = 0, leaves = 28) {
  const golden = 137.5 * (Math.PI / 180);
  for (let i = 0; i < leaves; i++) {
    const a = i * golden + rotation;
    const r = size * 0.08 + i * size * 0.012;
    const px = x + Math.cos(a) * r;
    const py = y + Math.sin(a) * r;
    const leafLength = size * (0.12 + i * 0.0055);
    const ex = px + Math.cos(a) * leafLength;
    const ey = py + Math.sin(a) * leafLength;
    const cx = px + Math.cos(a + 0.22) * leafLength * 0.44;
    const cy = py + Math.sin(a + 0.22) * leafLength * 0.44;

    branchPath(`M ${x} ${y} Q ${cx} ${cy} ${ex} ${ey}`, 0.42, 0.95);
    branchEllipse(px, py, leafLength * 0.16, leafLength * 0.46, (a * 180) / Math.PI + 90, 0.26);
  }
  branchCircle(x, y, 3.2, true);
}

function drawSpikyRadialRosette(x, y, size, rotation = 0, count = 12) {
  for (let i = 0; i < count; i++) {
    const a = rotation + (Math.PI * 2 * i) / count;
    const len = size * (0.58 + 0.16 * Math.sin(i * 1.7));
    const ex = x + Math.cos(a) * len;
    const ey = y + Math.sin(a) * len;
    branchPath(`M ${x} ${y} Q ${x + Math.cos(a + 0.12) * len * 0.42} ${y + Math.sin(a + 0.12) * len * 0.42} ${ex} ${ey}`, 0.44, 1.1);
    branchLine(ex, ey, ex + Math.cos(a) * 10, ey + Math.sin(a) * 10, 0.38, 0.8);
  }
  branchCircle(x, y, 3, true);
}

function drawOrganicStemChain(x, y, size, rotation = 0, count = 8) {
  let px = x;
  let py = y;
  const mainAngle = rotation - Math.PI / 2;

  for (let i = 1; i <= count; i++) {
    const t = i / count;
    const wave = Math.sin(i * 0.9 + rotation) * size * 0.13;
    const nx = x + Math.cos(mainAngle) * size * t + Math.cos(mainAngle + Math.PI / 2) * wave;
    const ny = y + Math.sin(mainAngle) * size * t + Math.sin(mainAngle + Math.PI / 2) * wave;
    branchPath(`M ${px} ${py} Q ${(px + nx) / 2 + wave * 0.2} ${(py + ny) / 2 - 18} ${nx} ${ny}`, 0.4, 1.2);

    const side = i % 2 === 0 ? 1 : -1;
    const la = mainAngle + side * 1.2;
    branchEllipse(nx + Math.cos(la) * size * 0.16, ny + Math.sin(la) * size * 0.16, size * 0.045, size * 0.16, (la * 180) / Math.PI + 90, 0.28);
    px = nx;
    py = ny;
  }
}

function drawLithopsColony(x, y, size, seed = 0, density = 0.8) {
  const count = Math.round(7 + density * 10);
  for (let i = 0; i < count; i++) {
    const a = seed + i * 2.399;
    const r = Math.sqrt(i + 1) * size * 0.09;
    const px = x + Math.cos(a) * r;
    const py = y + Math.sin(a) * r;
    const s = size * (0.12 + (i % 4) * 0.012);
    branchEllipse(px - s * 0.18, py, s * 0.18, s * 0.32, (a * 180) / Math.PI - 10, 0.34);
    branchEllipse(px + s * 0.18, py, s * 0.18, s * 0.32, (a * 180) / Math.PI + 10, 0.34);
    branchLine(px, py - s * 0.26, px, py + s * 0.26, 0.22, 0.8);
    branchPath(`M ${x} ${y} Q ${(x + px) / 2} ${(y + py) / 2 - 18} ${px} ${py}`, 0.16, 0.75);
  }
  branchCircle(x, y, 3, true);
}

function drawCactusStructure(x, y, size, rotation = 0, segmentCount = 10) {
  drawGlobalColumn(x, y, size * 0.76);
  for (let i = 0; i < segmentCount; i++) {
    const a = rotation + (Math.PI * 2 * i) / segmentCount;
    const px = x + Math.cos(a) * size * 0.22;
    const py = y + Math.sin(a) * size * 0.44;
    for (let k = 0; k < 5; k++) {
      const sa = a + (Math.PI * 2 * k) / 5;
      branchLine(px, py, px + Math.cos(sa) * size * 0.08, py + Math.sin(sa) * size * 0.08, 0.26, 0.65);
    }
  }
}

function drawRootNetwork(x, y, size, seed = 0) {
  function recur(px, py, len, angle, depth) {
    if (depth <= 0 || len < 4) return;
    const nx = px + Math.cos(angle) * len;
    const ny = py + Math.sin(angle) * len;
    branchPath(`M ${px} ${py} Q ${(px + nx) / 2 + Math.sin(seed + depth) * 12} ${(py + ny) / 2 + 12} ${nx} ${ny}`, 0.28, 0.8);
    recur(nx, ny, len * 0.62, angle + 0.55 + Math.sin(seed) * 0.2, depth - 1);
    recur(nx, ny, len * 0.58, angle - 0.62 + Math.cos(seed) * 0.2, depth - 1);
  }

  for (let i = 0; i < 7; i++) {
    recur(x, y, size * (0.24 + i * 0.015), Math.PI / 2 + (i - 3) * 0.28, 4);
  }
}

function drawGlobalRadial(x, y, size, count = 10, rotation = 0) {
  for (let i = 0; i < count; i++) {
    const a = rotation + (Math.PI * 2 * i) / count;
    const ex = x + Math.cos(a) * size;
    const ey = y + Math.sin(a) * size;
    branchLine(x, y, ex, ey, 0.3, 1.05);
    branchEllipse(ex, ey, size * 0.045, size * 0.12, (a * 180) / Math.PI + 90, 0.22);
  }
}

function drawGlobalFan(x, y, size, rotation = 0) {
  for (let i = 0; i < 9; i++) {
    const a = rotation - Math.PI * 0.82 + (Math.PI * 1.64 * i) / 8;
    const ex = x + Math.cos(a) * size * 0.78;
    const ey = y + Math.sin(a) * size * 0.56;
    const cx = x + Math.cos(a) * size * 0.32;
    const cy = y + Math.sin(a) * size * 0.16;
    branchPath(`M ${x} ${y} Q ${cx} ${cy} ${ex} ${ey}`, 0.34, 1.05);
    branchEllipse(ex, ey, size * 0.06, size * 0.18, (a * 180) / Math.PI + 90, 0.25);
  }
}

function drawGlobalColumn(x, y, size) {
  branchPath(
    `M ${x} ${y + size * 0.65}
     C ${x - size * 0.17} ${y + size * 0.16}, ${x - size * 0.1} ${y - size * 0.55}, ${x} ${y - size * 0.92}
     C ${x + size * 0.1} ${y - size * 0.55}, ${x + size * 0.17} ${y + size * 0.16}, ${x} ${y + size * 0.65}`,
    0.38,
    1.25
  );
  branchLine(x, y + size * 0.55, x, y - size * 0.82, 0.24, 0.9);
}

function drawGlobalStapeliaFlower(x, y, size, rotation = 0) {
  for (let i = 0; i < 5; i++) {
    const a = rotation + (Math.PI * 2 * i) / 5;
    const tx = x + Math.cos(a) * size * 0.74;
    const ty = y + Math.sin(a) * size * 0.74;
    branchLine(x, y, tx, ty, 0.38, 1.05);
    branchPath(`M ${x} ${y} Q ${x + Math.cos(a + 0.35) * size * 0.38} ${y + Math.sin(a + 0.35) * size * 0.38} ${tx} ${ty}`, 0.28, 1);
  }
  branchCircle(x, y, 2.6, true);
}

function drawGlobalBranching(x, y, size) {
  branchLine(x, y + size * 0.42, x, y - size * 0.78, 0.35, 1.2);
  const branches = [[-0.62, -0.1], [0.7, -0.28], [-0.48, -0.48], [0.42, -0.64], [-0.25, -0.78]];
  branches.forEach(([dir, h]) => {
    const sx = x;
    const sy = y + size * h;
    const ex = x + size * dir;
    const ey = y + size * (h - 0.32);
    branchPath(`M ${sx} ${sy} Q ${x + size * dir * 0.28} ${y + size * (h - 0.14)} ${ex} ${ey}`, 0.34, 1);
    branchEllipse(ex, ey, size * 0.045, size * 0.12, dir > 0 ? 45 : -45, 0.24);
  });
}

function drawGlobalFractalCluster(x, y, size, rotation = 0) {
  const starts = [[-0.45, -0.12], [0.48, -0.18], [-0.25, 0.34], [0.32, 0.28], [0.05, -0.48], [-0.05, 0.05]];
  starts.forEach(([dx, dy], idx) => {
    const ex = x + dx * size;
    const ey = y + dy * size;
    branchPath(`M ${x} ${y} Q ${(x + ex) / 2} ${y - 28} ${ex} ${ey}`, 0.28, 1.05);
    drawMiniFractal(ex, ey, size * 0.26, rotation + idx);
  });
}

function drawMiniFractal(x, y, size, seed = 0) {
  function recur(px, py, len, angle, depth) {
    if (depth <= 0 || len < 3) return;
    const nx = px + Math.cos(angle) * len;
    const ny = py + Math.sin(angle) * len;
    branchLine(px, py, nx, ny, 0.28, 0.8);
    recur(nx, ny, len * 0.58, angle + 0.85 + Math.sin(seed) * 0.12, depth - 1);
    recur(nx, ny, len * 0.58, angle - 0.85 + Math.cos(seed) * 0.12, depth - 1);
  }
  recur(x, y, size, -Math.PI / 2 + seed * 0.17, 4);
}