"use strict";
const Constants = require ("../../../Constants");
const MazesEndBase = require("../setDGM/MazesEnd");

class MazesEnd extends MazesEndBase {
  constructor (game) {
    super(game, "Maze's End", "Dragon's Maze Promos", "PDGM");
  }
}

module.exports = MazesEnd;
