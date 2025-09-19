const KEY = "wishlist";

export const getWishlist = (): number[] => {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
  catch { return []; }
};

export const toggleWishlist = (id: number) => {
  const set = new Set(getWishlist());
  set.has(id) ? set.delete(id) : set.add(id);
  localStorage.setItem(KEY, JSON.stringify([...set]));
  return [...set];
};
