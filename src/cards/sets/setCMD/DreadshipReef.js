"use strict";
const Constants = require ("../../../Constants");
const DreadshipReefBase = require("../setCM2/DreadshipReef");

class DreadshipReef extends DreadshipReefBase {
  constructor (game) {
    super(game, "Dreadship Reef", "Commander 2011", "CMD");
  }
}

module.exports = DreadshipReef;
