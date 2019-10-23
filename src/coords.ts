export interface Coords {
  x: number;
  y: number;
}

export function add(c1: Coords, c2: Coords): Coords {
  return {
    x: c1.x + c2.x,
    y: c1.y + c2.y,
  };
}

export function subtract(c1: Coords, c2: Coords): Coords {
  return {
    x: c1.x - c2.x,
    y: c1.y - c2.y,
  };
}
