"use strict";
const Constants = require ("../../../Constants");
const VolcanicEruptionBase = require("../setCED/VolcanicEruption");

class VolcanicEruption extends VolcanicEruptionBase {
  constructor(game) {
    super(game, "Volcanic Eruption", "Limited Edition Alpha", "LEA");
  }
}

module.exports = VolcanicEruption;
