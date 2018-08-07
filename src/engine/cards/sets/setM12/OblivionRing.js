"use strict";
const Constants = require ("../../../Constants");
const OblivionRingBase = require("../setMM2/OblivionRing");

class OblivionRing extends OblivionRingBase {
  constructor (game) {
    super(game, "Oblivion Ring", "Magic 2012", "M12");
  }
}

module.exports = OblivionRing;
