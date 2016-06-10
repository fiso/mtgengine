"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingedSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Winged Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = WingedSliver;
