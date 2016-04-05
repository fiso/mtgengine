"use strict";
const Constants = require ("../../../Constants");
const MyrSireBase = require("../setC14/MyrSire");

class MyrSire extends MyrSireBase {
  constructor(game) {
    super(game, "Myr Sire", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MyrSire;
