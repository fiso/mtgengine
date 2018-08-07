"use strict";
const Constants = require ("../../../Constants");
const HellionEruptionBase = require("../setPCA/HellionEruption");

class HellionEruption extends HellionEruptionBase {
  constructor (game) {
    super(game, "Hellion Eruption", "Planechase 2012", "PC2");
  }
}

module.exports = HellionEruption;
