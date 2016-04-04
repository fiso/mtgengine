"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreamFractureBase = require("../setEVE/DreamFracture.js");

class DreamFracture extends DreamFractureBase {
  constructor(game) {
    super(game, "Dream Fracture", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DreamFracture;
