"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormchaserMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormchaser Mage", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StormchaserMage;
