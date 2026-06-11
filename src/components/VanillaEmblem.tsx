export function VanillaEmblem({ size = 120, color = "#2A211C" }: { size?: number; color?: string }) {
  // If the color requested is gold (#C9A56A), we can apply a filter to tint the image to a golden color.
  const isGold = color.toLowerCase() === "#c9a56a";
  const filterStyle = isGold 
    ? "sepia(0.6) saturate(1.5) hue-rotate(15deg) brightness(0.9)" 
    : "none";

  return (
    <img
      src="/magna-submark-logo.png"
      alt="Magna Nusantara vanilla flower emblem"
      width={size}
      height={size}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "contain",
        filter: filterStyle,
      }}
    />
  );
}
