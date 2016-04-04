"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrixisIllusionistBase = require("../setCON/GrixisIllusionist.js");

class GrixisIllusionist extends GrixisIllusionistBase {
  constructor(game) {
    super(game, "Grixis Illusionist", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = GrixisIllusionist;
