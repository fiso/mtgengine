"use strict";
const Constants = require ("../../../Constants");
const DimirDoppelgangerBase = require("../setCNS/DimirDoppelganger");

class DimirDoppelganger extends DimirDoppelgangerBase {
  constructor(game) {
    super(game, "Dimir Doppelganger", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirDoppelganger;
