"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NicolBolasPlaneswalker extends Card {
  constructor(game) {
    super(game, "Nicol Bolas, Planeswalker", "Conflux", "CON");
  }
}

module.exports = NicolBolasPlaneswalker;
