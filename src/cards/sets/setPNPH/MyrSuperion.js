"use strict";
const Constants = require ("../../../Constants");
const MyrSuperionBase = require("../setNPH/MyrSuperion");

class MyrSuperion extends MyrSuperionBase {
  constructor (game) {
    super(game, "Myr Superion", "New Phyrexia Promos", "PNPH");
  }
}

module.exports = MyrSuperion;
