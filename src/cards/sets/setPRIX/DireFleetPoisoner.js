"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DireFleetPoisoner extends UnimplementedCard {
  constructor (game) {
    super(game, "Dire Fleet Poisoner", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = DireFleetPoisoner;
