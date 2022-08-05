import { useState } from "react";

export const ItemTypes = {
  BATTLESHIP: 'battleship',
  CARRIER: 'carrier',
  CRUISER: 'cruiser',
  SUBMARINE: 'submarine',
  DESTROYER: 'destroyer'
}

export const ALL_SHIPS = [
  {
    name: 'carrier',
    length: 5,
    color: 'green',
    placed: false,
    location: {
                squares: [],
                direction: null
              }
  },
  {
    name: 'battleship',
    length: 4,
    color: 'blue',
    placed: false,
    location: {
      squares: [],
      direction: null
    }
  },
  {
    name: 'cruiser',
    length: 3,
    color: 'yellow',
    placed: false,
    location: {
      squares: [],
      direction: null
    }
  },
  {
    name: 'submarine',
    length: 3,
    color: 'purple',
    placed: false,
    location: {
      squares: [],
      direction: null
    }
  },
  {
    name: 'destroyer',
    length: 2,
    color: 'beige',
    placed: false,
    location: {
      squares: [],
      direction: null
    }
  },
];

const USER_SQUARE_COLORS = [];
USER_SQUARE_COLORS.length = 100;
export {USER_SQUARE_COLORS};

const COMPUTER_SQUARE_COLORS = [];
COMPUTER_SQUARE_COLORS.length = 100;
export {COMPUTER_SQUARE_COLORS};
