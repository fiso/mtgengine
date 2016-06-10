"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UphillBattle extends UnimplementedCard {
  constructor (game) {
    super(game, "Uphill Battle", "Mercadian Masques", "MMQ");
  }
}

module.exports = UphillBattle;
