"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SulfuricVortexBase = require("../setDDK/SulfuricVortex.js");

class SulfuricVortex extends SulfuricVortexBase {
  constructor(game) {
    super(game, "Sulfuric Vortex", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SulfuricVortex;
