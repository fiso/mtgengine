"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HibernationSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Hibernation Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = HibernationSliver;
