import { Hand, Footprints, Flame, Shield, Swords, type LucideProps } from "lucide-react";

/**
 * Maps a discipline key to a representative lucide icon.
 * (lucide-react has no dedicated martial-arts glyphs, so these are
 * evocative stand-ins — easy to swap if the client prefers others.)
 */
const map: Record<string, React.ComponentType<LucideProps>> = {
  boxing: Hand,
  kickboxing: Footprints,
  muaythai: Flame,
  bjj: Shield,
  wrestling: Swords,
};

export default function DisciplineIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = map[name] ?? Swords;
  return <Icon {...props} />;
}
