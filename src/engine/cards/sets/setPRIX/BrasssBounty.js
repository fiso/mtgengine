"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrasssBounty extends UnimplementedCard {
  constructor (game) {
    super(game, "Brass's Bounty", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = BrasssBounty;
