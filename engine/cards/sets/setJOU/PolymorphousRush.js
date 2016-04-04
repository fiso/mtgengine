"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PolymorphousRush extends Card {
  constructor(game) {
    super(game, "Polymorphous Rush", "Journey into Nyx", "JOU");
  }
}

module.exports = PolymorphousRush;
