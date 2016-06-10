"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ButcherofMalakir extends UnimplementedCard {
  constructor (game) {
    super(game, "Butcher of Malakir", "Commander 2014", "C14");
  }
}

module.exports = ButcherofMalakir;
