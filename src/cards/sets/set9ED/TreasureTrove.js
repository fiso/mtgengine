"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureTrove extends UnimplementedCard {
  constructor (game) {
    super(game, "Treasure Trove", "Ninth Edition", "9ED");
  }
}

module.exports = TreasureTrove;
