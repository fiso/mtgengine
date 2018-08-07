"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionsHelm extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion's Helm", "Kaladesh Inventions", "MPS");
  }
}

module.exports = ChampionsHelm;
