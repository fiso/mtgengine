"use strict";
const Constants = require ("../../../Constants");
const RaptorCompanionBase = require("../setBBD/RaptorCompanion");

class RaptorCompanion extends RaptorCompanionBase {
  constructor (game) {
    super(game, "Raptor Companion", "Rivals of Ixalan", "RIX");
  }
}

module.exports = RaptorCompanion;
