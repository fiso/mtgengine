"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionofDusk extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion of Dusk", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = ChampionofDusk;
