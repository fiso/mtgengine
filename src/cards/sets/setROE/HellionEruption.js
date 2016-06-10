"use strict";
const Constants = require ("../../../Constants");
const HellionEruptionBase = require("../setDDP/HellionEruption");

class HellionEruption extends HellionEruptionBase {
  constructor (game) {
    super(game, "Hellion Eruption", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HellionEruption;
