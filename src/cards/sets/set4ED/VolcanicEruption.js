"use strict";
const Constants = require ("../../../Constants");
const VolcanicEruptionBase = require("../setCED/VolcanicEruption");

class VolcanicEruption extends VolcanicEruptionBase {
  constructor (game) {
    super(game, "Volcanic Eruption", "Fourth Edition", "4ED");
  }
}

module.exports = VolcanicEruption;
