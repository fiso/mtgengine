"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercadianLift extends UnimplementedCard {
  constructor (game) {
    super(game, "Mercadian Lift", "Mercadian Masques", "MMQ");
  }
}

module.exports = MercadianLift;
