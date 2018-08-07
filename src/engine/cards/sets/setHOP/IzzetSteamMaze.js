"use strict";
const Constants = require ("../../../Constants");
const IzzetSteamMazeBase = require("../setPCA/IzzetSteamMaze");

class IzzetSteamMaze extends IzzetSteamMazeBase {
  constructor (game) {
    super(game, "Izzet Steam Maze", "Planechase", "HOP");
  }
}

module.exports = IzzetSteamMaze;
