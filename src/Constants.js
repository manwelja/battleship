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

export const SQUARE_COLORS = [];