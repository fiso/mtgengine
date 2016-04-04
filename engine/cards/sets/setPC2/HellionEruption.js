"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellionEruptionBase = require("../setDDP/HellionEruption.js");

class HellionEruption extends HellionEruptionBase {
  constructor(game) {
    super(game, "Hellion Eruption", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = HellionEruption;
