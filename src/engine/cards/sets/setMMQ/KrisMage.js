"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrisMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Kris Mage", "Mercadian Masques", "MMQ");
  }
}

module.exports = KrisMage;
