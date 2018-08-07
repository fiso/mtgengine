"use strict";
const Constants = require ("../../../Constants");
const AmbushCommanderBase = require("../setEVG/AmbushCommander");

class AmbushCommander extends AmbushCommanderBase {
  constructor (game) {
    super(game, "Ambush Commander", "Scourge", "SCG");
  }
}

module.exports = AmbushCommander;
