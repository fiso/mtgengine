"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PolymorphousRush extends UnimplementedCard {
  constructor (game) {
    super(game, "Polymorphous Rush", "Journey into Nyx", "JOU");
  }
}

module.exports = PolymorphousRush;
