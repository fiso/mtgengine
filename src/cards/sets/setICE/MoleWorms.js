"use strict";
const Constants = require ("../../../Constants");
const MoleWormsBase = require("../set5ED/MoleWorms");

class MoleWorms extends MoleWormsBase {
  constructor (game) {
    super(game, "Mole Worms", "Ice Age", "ICE");
  }
}

module.exports = MoleWorms;
