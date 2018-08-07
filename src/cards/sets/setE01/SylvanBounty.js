"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanBounty extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Bounty", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = SylvanBounty;
