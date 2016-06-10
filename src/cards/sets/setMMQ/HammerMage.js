"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammer Mage", "Mercadian Masques", "MMQ");
  }
}

module.exports = HammerMage;
