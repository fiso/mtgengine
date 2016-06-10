"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessEmbermage extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Embermage", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RecklessEmbermage;
