"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PillarofFlameBase = require("../setAVR/PillarofFlame.js");

class PillarofFlame extends PillarofFlameBase {
  constructor(game) {
    super(game, "Pillar of Flame", "Friday Night Magic", "pFNM");
  }
}

module.exports = PillarofFlame;
