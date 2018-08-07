"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Wandering Champion", "Fate Reforged", "FRF");
  }
}

module.exports = WanderingChampion;
