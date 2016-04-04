"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmorSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Armor Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = ArmorSliver;
