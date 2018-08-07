"use strict";
const Constants = require ("../../../Constants");
const AscendedLawmageBase = require("../setCN2/AscendedLawmage");

class AscendedLawmage extends AscendedLawmageBase {
  constructor (game) {
    super(game, "Ascended Lawmage", "Dragon's Maze", "DGM");
  }
}

module.exports = AscendedLawmage;
