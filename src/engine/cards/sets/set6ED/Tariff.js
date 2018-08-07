"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tariff extends UnimplementedCard {
  constructor (game) {
    super(game, "Tariff", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Tariff;
