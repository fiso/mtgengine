"use strict";
const Constants = require ("../../../Constants");
const HazezonTamarBase = require("../setLEG/HazezonTamar");

class HazezonTamar extends HazezonTamarBase {
  constructor(game) {
    super(game, "Hazezon Tamar", "Masters Edition III", "ME3");
  }
}

module.exports = HazezonTamar;
