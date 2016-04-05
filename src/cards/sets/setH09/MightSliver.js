"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MightSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Might Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = MightSliver;
