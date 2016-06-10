"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setATH/Swamp");

class Swamp extends SwampBase {
  constructor (game) {
    super(game, "Swamp", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Swamp;
