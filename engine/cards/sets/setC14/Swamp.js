"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setATH/Swamp");

class Swamp extends SwampBase {
  constructor(game) {
    super(game, "Swamp", "Commander 2014", "C14");
  }
}

module.exports = Swamp;
