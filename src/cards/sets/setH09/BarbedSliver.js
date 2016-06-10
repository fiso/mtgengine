"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Barbed Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = BarbedSliver;
