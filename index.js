import util from "util";

import fs from "fs";

const output = fs.createWriteStream("./stdout.log");

const errorOutput = fs.createWriteStream("./stderr.log");

// Simple logger

const logger = new console.Console({
  stdout: output,

  stderr: errorOutput,

  inspectOptions: {
    // Maximum number of Array elements to include when formatting.

    maxArrayLength: 3,

    // Maximum number of characters to include when formatting.

    maxStringLength: 10,

    // If properties of an object are sorted

    sorted: true,

    // Remember to enable the color mode. Default is false.

    colors: true,
  },
});

// display first 10 characters

logger.log("log: object", { attr: "string content a b c d e f g h i j k" });

// log: object { attr: ‘string content a b c’… 16 more characters }

// display first 3 items

logger.log("log: array", [
  "array_value1",
  "array_value2",
  "array_value3",
  "array_value4",
  "array_value5",
]);

// log: array [ ‘array_value1’, ‘array_value2’, ‘array_value3’, … 2 more items ]

// sorted array is displayed

logger.log("log: set", new Set([3, 1, 2, 5, 4]));

// log: set Set(5) { 1, 2, 3, 4, 5 }

// number styling is changed to blue

util.inspect.styles.number = "blue";

// numbers are shown in blue

logger.log("log: set", new Set([30, 10, 20, 50, 40]));

// log: set Set { 10, 20, 30, 40, 50 }
