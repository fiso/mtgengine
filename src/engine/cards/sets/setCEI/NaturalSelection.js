"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalSelection extends UnimplementedCard {
  constructor (game) {
    super(game, "Natural Selection", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = NaturalSelection;
