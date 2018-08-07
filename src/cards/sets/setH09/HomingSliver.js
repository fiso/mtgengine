"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomingSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Homing Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = HomingSliver;
