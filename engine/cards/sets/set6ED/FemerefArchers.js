"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FemerefArchers extends Card {
  constructor(game) {
    super(game, "Femeref Archers", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FemerefArchers;
