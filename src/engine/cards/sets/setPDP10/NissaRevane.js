"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissaRevane extends UnimplementedCard {
  constructor (game) {
    super(game, "Nissa Revane", "Duels of the Planeswalkers Promos 2010", "PDP10");
  }
}

module.exports = NissaRevane;
