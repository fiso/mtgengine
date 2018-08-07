"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ButcherofMalakir extends UnimplementedCard {
  constructor (game) {
    super(game, "Butcher of Malakir", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = ButcherofMalakir;
