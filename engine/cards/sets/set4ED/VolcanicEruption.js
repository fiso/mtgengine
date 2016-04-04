"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolcanicEruptionBase = require("../setCED/VolcanicEruption.js");

class VolcanicEruption extends VolcanicEruptionBase {
  constructor(game) {
    super(game, "Volcanic Eruption", "Fourth Edition", "4ED");
  }
}

module.exports = VolcanicEruption;
