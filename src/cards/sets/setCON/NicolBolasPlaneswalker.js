"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NicolBolasPlaneswalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Nicol Bolas, Planeswalker", "Conflux", "CON");
  }
}

module.exports = NicolBolasPlaneswalker;
