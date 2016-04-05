"use strict";
const Constants = require ("../../../Constants");
const SomberHoverguardBase = require("../setMRD/SomberHoverguard");

class SomberHoverguard extends SomberHoverguardBase {
  constructor(game) {
    super(game, "Somber Hoverguard", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SomberHoverguard;
