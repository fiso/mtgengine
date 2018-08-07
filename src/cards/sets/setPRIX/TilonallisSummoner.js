"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TilonallisSummoner extends UnimplementedCard {
  constructor (game) {
    super(game, "Tilonalli's Summoner", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = TilonallisSummoner;
