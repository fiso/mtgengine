"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SomberHoverguardBase = require("../setMRD/SomberHoverguard.js");

class SomberHoverguard extends SomberHoverguardBase {
  constructor(game) {
    super(game, "Somber Hoverguard", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SomberHoverguard;
