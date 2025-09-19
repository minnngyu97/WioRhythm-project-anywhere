import { EventList, Product } from "../db/type/common";

export const isNew = (p: Product, days = 30) => {
  const now = new Date();
  const rel = new Date(p.releaseDate);
  const diff = (now.getTime() - rel.getTime()) / (1000 * 60 * 60 * 24);
  return diff <= days;
};

export const isEventActive = (p: Product, events: EventList, now = new Date(), targetId?: string) => {
  const ids = p.events || [];
  return ids.some(id => {
    if (targetId && id !== targetId) return false;
    const ev = events.find(e => e.id === id);
    if (!ev) return false;
    const s = new Date(ev.start), e = new Date(ev.end);
    return s <= now && now <= e;
  });
};

type BestBy = "likes" | "wishlist" | "sales";
export const isBest = (p: Product, by: BestBy = "wishlist", min = 100) => {
  const v = p.stats?.[by] ?? 0;
  return v >= min;
};

export const formatPrice = (v: number) =>
  v.toLocaleString(undefined, { maximumFractionDigits: 0 });
