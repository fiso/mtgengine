"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrinketMageBase = require("../setDDF/TrinketMage.js");

class TrinketMage extends TrinketMageBase {
  constructor(game) {
    super(game, "Trinket Mage", "Fifth Dawn", "5DN");
  }
}

module.exports = TrinketMage;
