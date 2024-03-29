const body = document.querySelector("body");
const root = document.querySelector("#root");
const containerElement = document.querySelector(".container");
const instructions = document.createElement("div");
const highscores = document.createElement("div");
let playerElement;

instructions.classList = "instructions";
highscores.classList = "highscores";

body.prepend(instructions);
body.prepend(highscores);

const world = {
  column: 3,
  row: 3,
  tile: 100,
  map: [[]],
  score: 0,
};

const player = {
  position: { x: 0, y: 0, z: 0 },
  grid: { x: 0, y: 0 },
};

const camera = {
  position: { x: 0, y: 0, z: 0 },
};

const randomMaze = Math.floor(Math.random() * mazes.length);

let gameTimer = 60;

let maze1Highscores = [
  { playerName: "AAA", time: 30 },
  { playerName: "BBB", time: 40 },
  { playerName: "CCC", time: 50 },
];

let maze2Highscores = [
  { playerName: "AAA", time: 30 },
  { playerName: "BBB", time: 40 },
  { playerName: "CCC", time: 50 },
];

let maze3Highscores = [
  { playerName: "AAA", time: 30 },
  { playerName: "BBB", time: 40 },
  { playerName: "CCC", time: 50 },
];

let teleporterPads = [];

// isometric degrees
var isoX = 60;
var isoY = 0;
var isoZ = 45;

/**
 *
 * https://stackoverflow.com/questions/10506502/what-is-the-connection-between-an-isometric-angle-and-scale
 * 45 * (Math.PI / 180) converts 45° into radians (π/4)
 * cos(π/4) = sin(π/4) = 0.7071067811865476
 * 1/cos(π/4) = 1/sin(π/4) = 1.414213562373095 and there's your magic number.
 * I'm using X rotate 60 degrees, Z rotate 45 degrees
 * as such, the magic number only works CLOSE enough to look like it works
 */

// See above for the magic number I'm using
var isoXScale = ((world.tile + 6) * 1.414213562373095) / 2;
var isoYScale = (world.tile + 3) / 1.414213562373095 / 2;

const baseMovement = world.tile + 6;
