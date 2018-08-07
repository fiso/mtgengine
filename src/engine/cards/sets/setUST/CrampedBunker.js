"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrampedBunker extends UnimplementedCard {
  constructor (game) {
    super(game, "Cramped Bunker", "Unstable", "UST");
  }
}

module.exports = CrampedBunker;
