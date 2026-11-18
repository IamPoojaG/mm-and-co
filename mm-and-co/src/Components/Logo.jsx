export default function Logo({ light = true, compact = false }) {
  return (
    <a href="#home" className="inline-flex items-center gap-3" aria-label="MM AND CO. home">
      <svg viewBox="0 0 72 58" className="h-11 w-14 shrink-0" role="img" aria-label="MM AND CO. logo mark">
        <path d="M4 49 20 34 20 17 31 7 31 49Z" fill="#f58216" />
        <path d="M28 49 43 31 43 3 54 13 54 49Z" fill="#ff9b32" />
        <path d="M49 49 62 38 62 21 69 28 69 49Z" fill="#f58216" />
        <path d="M4 52h66" stroke={light ? "#fff" : "#182638"} strokeWidth="3" strokeLinecap="round" />
      </svg>
      {!compact && (
        <span className="leading-tight">
          <span className={`block text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>MM AND CO.</span>
          <span className={`block text-[9px] font-semibold tracking-wide ${light ? "text-slate-300" : "text-slate-500"}`}>Stockist · Facilitator · Service Provider</span>
        </span>
      )}
    </a>
  );
}
