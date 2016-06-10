"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CleartheLand extends UnimplementedCard {
  constructor (game) {
    super(game, "Clear the Land", "Mercadian Masques", "MMQ");
  }
}

module.exports = CleartheLand;
