"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IzzetSteamMaze extends UnimplementedCard {
  constructor(game) {
    super(game, "Izzet Steam Maze", "Planechase", "HOP");
  }
}

module.exports = IzzetSteamMaze;
