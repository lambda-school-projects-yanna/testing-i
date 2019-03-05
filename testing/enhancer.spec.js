const enhancer = require('../enhancer/enhancer.js');

let item = {
    name: '',
    type: '',
    durability: 90,
    enhancement: 14
};

const enhanceLevels = {
    1: "[+1]",
    2: "[+2]",
    3: "[+3]",
    4: "[+4]",
    5: "[+5]",
    6: "[+6]",
    7: "[+7]",
    8: "[+8]",
    9: "[+9]",
    10: "[+10]",
    11: "[+11]",
    12: "[+12]",
    13: "[+13]",
    14: "[+14]",
    15: "[+15]",
    16: "[PRI]",
    17: "[DUO]",
    18: "[TRI]",
    19: "[TET]",
    20: "[PEN]"
  };

test('repair item', () => {
    const expected = 100;
    const actual = enhancer.repair(item);
    expect(actual).toBe(expected);
});

describe('failure()', () => {
    it('durability decreased by 5 if enhancement is between 0 and 14', () => {
        const expectedDurability = item.durability - 5;
        const actualDurability = enhancer.failure(item)["durability"];
        expect(actualDurability).toBe(expectedDurability);
    });

    it('durability decreased by 10 if enhancement is > 14', () => {
        // Arrange (Setup)
        const item = {
            name: '',
            type: '',
            durability: 90,
            enhancement: 15
        };

        // Act - execute the SUT (suite under testing)
        const expectedDurability = item.durability - 10;
        const actualDurability = enhancer.failure(item)["durability"];

        // Assert 
        expect(actualDurability).toBe(expectedDurability);
    });
});

test('enhance item success', () => {
    const expectedEnhancement = item.enhancement + 1;
    let actualEnhancement = enhancer.success(item)["enhancement"];

    const expectedName = enhanceLevels[item.enhancement+1];
    let actualName = enhancer.success(item)["name"]

    expect(actualEnhancement).toBe(expectedEnhancement);
    expect(actualName).toBe(expectedName);
});



