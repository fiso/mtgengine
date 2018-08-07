"use strict";
const Constants = require ("../../../Constants");
const VishKalBloodArbiterBase = require("../setCMD/VishKalBloodArbiter");

class VishKalBloodArbiter extends VishKalBloodArbiterBase {
  constructor (game) {
    super(game, "Vish Kal, Blood Arbiter", "Commander 2011 Launch Party", "PCMD");
  }
}

module.exports = VishKalBloodArbiter;
