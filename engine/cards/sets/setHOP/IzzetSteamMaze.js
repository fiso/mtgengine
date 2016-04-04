"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IzzetSteamMaze extends Card {
  constructor(game) {
    super(game, "Izzet Steam Maze", "Planechase", "HOP");
  }
}

module.exports = IzzetSteamMaze;
