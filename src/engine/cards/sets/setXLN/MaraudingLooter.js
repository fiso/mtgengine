"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaraudingLooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Marauding Looter", "Ixalan", "XLN");
  }
}

module.exports = MaraudingLooter;
