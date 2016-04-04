"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormchaserMage extends Card {
  constructor(game) {
    super(game, "Stormchaser Mage", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StormchaserMage;
