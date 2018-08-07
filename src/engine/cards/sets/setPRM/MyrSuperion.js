"use strict";
const Constants = require ("../../../Constants");
const MyrSuperionBase = require("../setNPH/MyrSuperion");

class MyrSuperion extends MyrSuperionBase {
  constructor (game) {
    super(game, "Myr Superion", "Magic Online Promos", "PRM");
  }
}

module.exports = MyrSuperion;
