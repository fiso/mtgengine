"use strict";
const Constants = require ("../../../Constants");
const GrixisIllusionistBase = require("../setCNS/GrixisIllusionist");

class GrixisIllusionist extends GrixisIllusionistBase {
  constructor (game) {
    super(game, "Grixis Illusionist", "Conflux", "CON");
  }
}

module.exports = GrixisIllusionist;
