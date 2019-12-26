/* Skillenza */
/* The Bad Apple
You’re given a tray of apples, divided into m rows and n columns.The numbering starts from 1 1.

Once of the apples is bad.Its given by r c.

Every day, a bad apple turns bad the adjacent ones.For example, if the bad apple is at 1 1, it takes a day to turn bad the ones at 1 2, 2 1 and 2 2. After two days, all the apples at 1 1, 1 2, 2 1, 2 2, 1 3, 2 3, 3 3, 3 2, 3 1 are bad.

And so on.

  So, given the values of n m and r c, find the number of days it will take for all the apples in the tray to turn bad.

Input Format
The first line of input consists of an integer t, denoting the number of test cases.Each test case consists of two lines.The first line consists of two space separated integers m and n denoting the number of rows and number of columns in the tray respectively.The second line consists of two space separated integers r and c denoting the position(row and column) in the tray respectively.

Output Format
For each test case, output the time in days needed for all the apples in the tray to turn bad. */

// Sample Input
// 3
// 8 3
// 2 2
// 21 28
// 1 21
// 1 1
// 1 1

// Sample Output
// 6
// 20
// 0

const findAdjacentLocations = ([r, c]) => {
  const left = [r - 1, c];
  const right = [r + 1, c];
  const top = [r, c - 1];
  const bottom = [r, c + 1];
  const topLeft = [r - 1, c - 1];
  const topRight = [r + 1, c - 1];
  const bottomLeft = [r - 1, c + 1];
  const bottomRight = [r + 1, c + 1];
  return [top, topRight, right, bottomRight, bottom, bottomLeft, left, topLeft];
};

const inBounds = ([x, y]) => ([r, c]) => r > 0 && r <= x && c > 0 && c <= y;

const badApple = () => {
  const [n, m] = [21, 28];
  const checkInBounds = inBounds([n, m]);

  const [r, c] = [1, 21];

  const visitedNodes = new Array(n + 1)
    .fill()
    .map(_ => new Array(m + 1).fill(0));

  const stack = [];
  let index = 0;

  stack.push([[r, c]]);

  while (true) {
    const affectedApples = stack[index]; // for a day
    const applesAffectedNextDay = [];
    affectedApples.forEach(location => {
      const adjacentLocations = findAdjacentLocations(location);
      adjacentLocations.forEach(([x, y]) => {
        if (checkInBounds([x, y]) && visitedNodes[x][y] === 0) {
          applesAffectedNextDay.push([x, y]);
          visitedNodes[x][y] = 1;
        }
      });
    });
    if (!applesAffectedNextDay.length) break;
    stack.push(applesAffectedNextDay);
    index++;
  }

  return stack.length - 1;
};

badApple();
