const add = (a: number, b: number): number => a + b

describe('when 1 + 1', () => {
  it('should return 2', () => {
    const actual = add(1, 1)
    const expected = 2
    expect(actual).toEqual(expected)
  })
})
