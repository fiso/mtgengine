"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WingedSliver extends Card {
  constructor(game) {
    super(game, "Winged Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = WingedSliver;
