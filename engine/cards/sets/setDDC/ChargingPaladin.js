"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChargingPaladinBase = require("../setDD3_DVD/ChargingPaladin.js");

class ChargingPaladin extends ChargingPaladinBase {
  constructor(game) {
    super(game, "Charging Paladin", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = ChargingPaladin;
