"use strict";
const Constants = require ("../../../Constants");
const VolcanicEruptionBase = require("../set4ED/VolcanicEruption");

class VolcanicEruption extends VolcanicEruptionBase {
  constructor (game) {
    super(game, "Volcanic Eruption", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = VolcanicEruption;
