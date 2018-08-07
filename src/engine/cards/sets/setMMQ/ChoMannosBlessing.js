"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChoMannosBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Cho-Manno's Blessing", "Mercadian Masques", "MMQ");
  }
}

module.exports = ChoMannosBlessing;
