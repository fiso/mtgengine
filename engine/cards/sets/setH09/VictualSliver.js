"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VictualSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Victual Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = VictualSliver;
