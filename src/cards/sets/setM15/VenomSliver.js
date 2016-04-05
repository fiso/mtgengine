"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenomSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Venom Sliver", "Magic 2015 Core Set", "M15");
  }
}

module.exports = VenomSliver;
