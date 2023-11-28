type RotationsBloc = [number, number, number, number];

export const Blocs = {
  I: [0x0f00, 0x2222, 0x00f0, 0x4444],
  J: [0x44c0, 0x8e00, 0x6440, 0x0e20],
  L: [0x4460, 0x0e80, 0xc440, 0x2e00],
  O: [0xcc00, 0xcc00, 0xcc00, 0xcc00],
  S: [0x06c0, 0x8c40, 0x6c00, 0x4620],
  T: [0x0e40, 0x4c40, 0x4e00, 0x4640],
  Z: [0x0c60, 0x4c80, 0xc600, 0x2640],
} as const;

export const computeBloc = (
  type: RotationsBloc,
  x: number,
  y: number,
  dir: number,
  fn: (x: number, y: number) => void
) => {
  let bit,
    row = 0,
    col = 0;
  const blocks = type[dir];
  for (bit = 0x8000; bit > 0; bit = bit >> 1) {
    if (blocks & bit) {
      fn(x + col, y + row);
    }
    if (++col === 4) {
      col = 0;
      ++row;
    }
  }
};

export const isOccupied = (
  type: RotationsBloc,
  x: number,
  y: number,
  dir: number
) => {
  let result = false;
  computeBloc(type, x, y, dir, function (x, y) {
    if (x < 0 || x >= nx || y < 0 || y >= ny || getBlock(x, y)) result = true;
  });
  return result;
};

export const isUnoccupied = (
  type: RotationsBloc,
  x: number,
  y: number,
  dir: number
) => {
  return !isOccupied(type, x, y, dir);
};


// https://codeincomplete.com/articles/javascript-tetris/