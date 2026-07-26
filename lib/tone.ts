import { ScentTone } from "./types";

export const toneColors: Record<ScentTone, { base: string; light: string; dark: string }> = {
  lavender: { base: "#8E7FB5", light: "#B7ADD1", dark: "#5F5285" },
  lemon: { base: "#D8C24A", light: "#E8DA8C", dark: "#A8942C" },
  rose: { base: "#C98A9C", light: "#E1B4C0", dark: "#9C5A6E" },
  citrus: { base: "#E0A24A", light: "#EFC688", dark: "#B27424" },
  pine: { base: "#4F7A5C", light: "#7EA98C", dark: "#33513C" },
  neutral: { base: "#8FAE96", light: "#B3CBB8", dark: "#5F7D66" },
};
