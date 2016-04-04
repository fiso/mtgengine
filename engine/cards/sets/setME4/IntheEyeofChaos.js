"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IntheEyeofChaosBase = require("../setLEG/IntheEyeofChaos.js");

class IntheEyeofChaos extends IntheEyeofChaosBase {
  constructor(game) {
    super(game, "In the Eye of Chaos", "Masters Edition IV", "ME4");
  }
}

module.exports = IntheEyeofChaos;
