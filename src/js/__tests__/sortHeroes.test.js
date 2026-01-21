import sortHeroes from '../sortHeroes';

describe('sortHeroes', () => {
  test('sorts heroes by health descending', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortHeroes(heroes)).toEqual(expected);
  });

  test('toBe does not work for objects', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    expect(sortHeroes(heroes)).not.toBe(heroes);
  });
});
