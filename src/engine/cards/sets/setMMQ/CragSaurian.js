"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CragSaurian extends UnimplementedCard {
  constructor (game) {
    super(game, "Crag Saurian", "Mercadian Masques", "MMQ");
  }
}

module.exports = CragSaurian;
