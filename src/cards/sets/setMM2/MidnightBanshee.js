"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MidnightBanshee extends UnimplementedCard {
  constructor (game) {
    super(game, "Midnight Banshee", "Modern Masters 2015", "MM2");
  }
}

module.exports = MidnightBanshee;
