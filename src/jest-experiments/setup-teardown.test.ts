const MOCK_CITIES = ['Sao Paulo', 'Rio de Janeiro', 'Manaus', 'Salvador']; 

describe('setup/teardown', () => {
  describe('synchronous setup', () => {
    let cities = [];
    
    const initCities = () => {
      cities = [...MOCK_CITIES];
    }
    
    beforeEach(() => {
      initCities();
    });

    test('add city', () => {
      cities.push('Cuiabá');
      expect(cities).toEqual([...MOCK_CITIES, 'Cuiabá']);
    });

    test('remove city', () => {
      const cityIndex = cities.findIndex(c => c === 'Sao Paulo');
      cities.splice(cityIndex, 1);
      expect(cities).not.toContain('Sao Paulo');
      expect(cities).not.toContain('Cuiabá');
    });

    test('check if beforeEach overwrites past mutations', () => {
      expect(cities).toEqual(MOCK_CITIES);
    });
  });

  describe('asynchronous setup', () => {
    let cities = [];

    const asyncInitCities = async () => {
      cities = [...MOCK_CITIES];
    }

    beforeEach(() => {
      return asyncInitCities();
    });

    test('add city', () => {
      cities.push('Cuiabá');
      expect(cities).toEqual([...MOCK_CITIES, 'Cuiabá']);
    });

    test('remove city', () => {
      const cityIndex = cities.findIndex(c => c === 'Sao Paulo');
      cities.splice(cityIndex, 1);
      expect(cities).not.toContain('Sao Paulo');
      expect(cities).not.toContain('Cuiabá');
    });

    test('check if beforeEach overwrites past mutations', () => {
      expect(cities).toEqual(MOCK_CITIES);
    });
  });
});
