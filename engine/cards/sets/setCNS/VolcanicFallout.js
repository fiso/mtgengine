"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolcanicFalloutBase = require("../setARC/VolcanicFallout.js");

class VolcanicFallout extends VolcanicFalloutBase {
  constructor(game) {
    super(game, "Volcanic Fallout", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = VolcanicFallout;
