"use strict";
const Constants = require ("../../../Constants");
const MazesEndBase = require("../setDGM/MazesEnd");

class MazesEnd extends MazesEndBase {
  constructor(game) {
    super(game, "Maze's End", "Prerelease Events", "pPRE");
  }
}

module.exports = MazesEnd;
