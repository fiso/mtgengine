"use strict";
const Constants = require ("../../../Constants");
const HellionEruptionBase = require("../setDDP/HellionEruption");

class HellionEruption extends HellionEruptionBase {
  constructor(game) {
    super(game, "Hellion Eruption", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = HellionEruption;
