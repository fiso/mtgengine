"use strict";
const Constants = require ("../../../Constants");
const GrixisIllusionistBase = require("../setCON/GrixisIllusionist");

class GrixisIllusionist extends GrixisIllusionistBase {
  constructor (game) {
    super(game, "Grixis Illusionist", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = GrixisIllusionist;
