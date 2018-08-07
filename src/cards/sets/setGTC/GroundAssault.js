"use strict";
const Constants = require ("../../../Constants");
const GroundAssaultBase = require("../setMM3/GroundAssault");

class GroundAssault extends GroundAssaultBase {
  constructor (game) {
    super(game, "Ground Assault", "Gatecrash", "GTC");
  }
}

module.exports = GroundAssault;
