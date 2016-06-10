"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setATH/Swamp");

class Swamp extends SwampBase {
  constructor (game) {
    super(game, "Swamp", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Swamp;
