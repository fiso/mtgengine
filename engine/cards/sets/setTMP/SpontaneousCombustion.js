"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpontaneousCombustionBase = require("../setCNS/SpontaneousCombustion.js");

class SpontaneousCombustion extends SpontaneousCombustionBase {
  constructor(game) {
    super(game, "Spontaneous Combustion", "Tempest", "TMP");
  }
}

module.exports = SpontaneousCombustion;
