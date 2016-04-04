"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MazesEndBase = require("../setDGM/MazesEnd.js");

class MazesEnd extends MazesEndBase {
  constructor(game) {
    super(game, "Maze's End", "Prerelease Events", "pPRE");
  }
}

module.exports = MazesEnd;
