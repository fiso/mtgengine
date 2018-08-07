"use strict";
const Constants = require ("../../../Constants");
const HazezonTamarBase = require("../setME3/HazezonTamar");

class HazezonTamar extends HazezonTamarBase {
  constructor (game) {
    super(game, "Hazezon Tamar", "Magic Online Promos", "PRM");
  }
}

module.exports = HazezonTamar;
