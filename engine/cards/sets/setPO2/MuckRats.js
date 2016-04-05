"use strict";
const Constants = require ("../../../Constants");
const MuckRatsBase = require("../setPOR/MuckRats");

class MuckRats extends MuckRatsBase {
  constructor(game) {
    super(game, "Muck Rats", "Portal Second Age", "PO2");
  }
}

module.exports = MuckRats;
