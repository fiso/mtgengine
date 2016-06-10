"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarnsTouch extends UnimplementedCard {
  constructor (game) {
    super(game, "Karn's Touch", "Mercadian Masques", "MMQ");
  }
}

module.exports = KarnsTouch;
