"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = HeartSliver;
