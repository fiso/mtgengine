"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlailingManticore extends UnimplementedCard {
  constructor (game) {
    super(game, "Flailing Manticore", "Mercadian Masques", "MMQ");
  }
}

module.exports = FlailingManticore;
