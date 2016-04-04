"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SistersoftheFlameBase = require("../set4ED/SistersoftheFlame.js");

class SistersoftheFlame extends SistersoftheFlameBase {
  constructor(game) {
    super(game, "Sisters of the Flame", "The Dark", "DRK");
  }
}

module.exports = SistersoftheFlame;
