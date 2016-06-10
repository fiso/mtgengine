"use strict";
const Constants = require ("../../../Constants");
const MyrSuperionBase = require("../setpMGD/MyrSuperion");

class MyrSuperion extends MyrSuperionBase {
  constructor (game) {
    super(game, "Myr Superion", "New Phyrexia", "NPH");
  }
}

module.exports = MyrSuperion;
