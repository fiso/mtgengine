"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecroticSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Necrotic Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = NecroticSliver;
