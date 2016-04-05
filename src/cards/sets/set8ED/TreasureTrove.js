"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureTrove extends UnimplementedCard {
  constructor(game) {
    super(game, "Treasure Trove", "Eighth Edition", "8ED");
  }
}

module.exports = TreasureTrove;
