"use strict";
const Constants = require ("../../../Constants");
const SomberHoverguardBase = require("../setMM2/SomberHoverguard");

class SomberHoverguard extends SomberHoverguardBase {
  constructor (game) {
    super(game, "Somber Hoverguard", "Mirrodin", "MRD");
  }
}

module.exports = SomberHoverguard;
