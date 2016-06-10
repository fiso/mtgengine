"use strict";
const Constants = require ("../../../Constants");
const AmbushCommanderBase = require("../setDD3_EVG/AmbushCommander");

class AmbushCommander extends AmbushCommanderBase {
  constructor (game) {
    super(game, "Ambush Commander", "Scourge", "SCG");
  }
}

module.exports = AmbushCommander;
