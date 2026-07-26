import { ScentTone, Category } from "@/lib/types";
import { toneColors } from "@/lib/tone";

function BottleShape({ category }: { category: Category }) {
  // Different silhouette per category so the shelf reads at a glance.
  if (category === "bath-body") {
    return (
      <path d="M42 18 C42 12 48 10 60 10 C72 10 78 12 78 18 L78 30 C88 34 92 44 92 58 L92 108 C92 116 86 122 78 122 L42 122 C34 122 28 116 28 108 L28 58 C28 44 32 34 42 30 Z" />
    );
  }
  if (category === "paper-care") {
    return (
      <path d="M26 34 L94 34 L94 112 C94 118 89 122 83 122 L37 122 C31 122 26 118 26 112 Z" />
    );
  }
  // floor-care & more: canister / concentrate bottle
  return (
    <path d="M46 14 C46 10 50 8 60 8 C70 8 74 10 74 14 L74 26 C86 30 94 42 94 60 L94 106 C94 115 87 122 78 122 L42 122 C33 122 26 115 26 106 L26 60 C26 42 34 30 46 26 Z" />
  );
}

export default function ProductVisual({
  tone,
  category,
  sku,
  className = "",
}: {
  tone: ScentTone;
  category: Category;
  sku: string;
  className?: string;
}) {
  const c = toneColors[tone];
  const gradId = `grad-${sku.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      viewBox="0 0 120 132"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.light} />
          <stop offset="55%" stopColor={c.base} />
          <stop offset="100%" stopColor={c.dark} />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradId})`} fillOpacity="0.9">
        <BottleShape category={category} />
      </g>
      <g fill="none" stroke={c.light} strokeOpacity="0.5" strokeWidth="1">
        <BottleShape category={category} />
      </g>
      {/* label plate */}
      <rect
        x="34"
        y={category === "paper-care" ? 58 : 62}
        width="52"
        height="26"
        rx="2"
        fill="#0D1210"
        fillOpacity="0.72"
      />
      <text
        x="60"
        y={category === "paper-care" ? 68 : 72}
        textAnchor="middle"
        fontSize="6.5"
        letterSpacing="1"
        fill="#F3F1EA"
        fontFamily="var(--font-inter), sans-serif"
      >
        CLEANNEST
      </text>
      <text
        x="60"
        y={category === "paper-care" ? 79 : 83}
        textAnchor="middle"
        fontSize="6"
        letterSpacing="1.5"
        fill={c.light}
        fontFamily="var(--font-inter), sans-serif"
      >
        {sku}
      </text>
    </svg>
  );
}
