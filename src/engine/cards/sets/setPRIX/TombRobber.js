"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TombRobber extends UnimplementedCard {
  constructor (game) {
    super(game, "Tomb Robber", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = TombRobber;
