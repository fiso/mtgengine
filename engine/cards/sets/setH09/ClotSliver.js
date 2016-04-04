"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClotSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Clot Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = ClotSliver;
