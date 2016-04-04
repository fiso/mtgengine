"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlasterMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Blaster Mage", "Mercadian Masques", "MMQ");
  }
}

module.exports = BlasterMage;
