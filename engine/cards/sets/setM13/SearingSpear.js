"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SearingSpearBase = require("../setpFNM/SearingSpear.js");

class SearingSpear extends SearingSpearBase {
  constructor(game) {
    super(game, "Searing Spear", "Magic 2013", "M13");
  }
}

module.exports = SearingSpear;
