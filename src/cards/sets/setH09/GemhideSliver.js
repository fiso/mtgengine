"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GemhideSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Gemhide Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = GemhideSliver;
