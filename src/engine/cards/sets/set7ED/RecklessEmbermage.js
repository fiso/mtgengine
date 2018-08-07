"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessEmbermage extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Embermage", "Seventh Edition", "7ED");
  }
}

module.exports = RecklessEmbermage;
