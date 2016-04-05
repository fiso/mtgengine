"use strict";
const Constants = require ("../../../Constants");
const BorosSwiftbladeBase = require("../setMM2/BorosSwiftblade");

class BorosSwiftblade extends BorosSwiftbladeBase {
  constructor(game) {
    super(game, "Boros Swiftblade", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BorosSwiftblade;
