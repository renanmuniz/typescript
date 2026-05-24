// Literal types:
// Instead of allowing any string/number, you can restrict a variable to specific values.

// String literal type
type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}

move("north"); // OK
move("south"); // OK
// move("up");  // Error: Argument of type '"up"' is not assignable to parameter of type 'Direction'

// Numeric literal type
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(result: DiceRoll): string {
  return `You rolled a ${result}`;
}

console.log(rollDice(3)); // OK
// rollDice(7);            // Error: 7 is not assignable to type 'DiceRoll'