"use strict";
const Constants = require ("../../../Constants");
const MelekIzzetParagonBase = require("../setC15/MelekIzzetParagon");

class MelekIzzetParagon extends MelekIzzetParagonBase {
  constructor(game) {
    super(game, "Melek, Izzet Paragon", "Dragon's Maze", "DGM");
  }
}

module.exports = MelekIzzetParagon;
