"use strict";
const Constants = require ("../../../Constants");
const DreamFractureBase = require("../setEVE/DreamFracture");

class DreamFracture extends DreamFractureBase {
  constructor (game) {
    super(game, "Dream Fracture", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DreamFracture;
