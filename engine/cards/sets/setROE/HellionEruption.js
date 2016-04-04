"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellionEruptionBase = require("../setDDP/HellionEruption.js");

class HellionEruption extends HellionEruptionBase {
  constructor(game) {
    super(game, "Hellion Eruption", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HellionEruption;
