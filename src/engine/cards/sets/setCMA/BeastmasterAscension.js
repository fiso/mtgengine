"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeastmasterAscension extends UnimplementedCard {
  constructor (game) {
    super(game, "Beastmaster Ascension", "Commander Anthology", "CMA");
  }
}

module.exports = BeastmasterAscension;
