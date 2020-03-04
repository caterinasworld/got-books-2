describe('Numerical Operations', () => {
  it('adding numbers', () => {
    expect(1 + 2).toEqual(3);
    expect(3 + 3).toEqual(6);
    expect(3 + 6).toEqual(9);
  });

  it('subtracting numbers', () => {
    expect(2 - 1).toEqual(1);
    expect(9 - 3).toEqual(6);
    expect(3 - 6).toEqual(-3);
  });

  it('multiplying numbers', () => {
    expect(1 * 2).toEqual(2);
    expect(3 * 3).toEqual(9);
    expect(3 * 6).toEqual(18);
  });

  it('dividing numbers', () => {
    expect(1 / 2).toEqual(0.5);
    expect(3 / 3).toEqual(1);
    expect(0 / 0).toEqual(NaN);
  });
});
