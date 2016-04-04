"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setATH/Swamp");

class Swamp extends SwampBase {
  constructor(game) {
    super(game, "Swamp", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Swamp;
