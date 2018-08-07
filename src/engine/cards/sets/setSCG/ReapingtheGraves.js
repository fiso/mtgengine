"use strict";
const Constants = require ("../../../Constants");
const ReapingtheGravesBase = require("../setTD0/ReapingtheGraves");

class ReapingtheGraves extends ReapingtheGravesBase {
  constructor (game) {
    super(game, "Reaping the Graves", "Scourge", "SCG");
  }
}

module.exports = ReapingtheGraves;
