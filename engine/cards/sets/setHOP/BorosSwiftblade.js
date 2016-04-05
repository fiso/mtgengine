"use strict";
const Constants = require ("../../../Constants");
const BorosSwiftbladeBase = require("../setMM2/BorosSwiftblade");

class BorosSwiftblade extends BorosSwiftbladeBase {
  constructor(game) {
    super(game, "Boros Swiftblade", "Planechase", "HOP");
  }
}

module.exports = BorosSwiftblade;
