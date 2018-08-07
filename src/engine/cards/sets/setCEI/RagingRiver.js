"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RagingRiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Raging River", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = RagingRiver;
