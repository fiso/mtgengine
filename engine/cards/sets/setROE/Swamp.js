"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setATH/Swamp");

class Swamp extends SwampBase {
  constructor(game) {
    super(game, "Swamp", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Swamp;
