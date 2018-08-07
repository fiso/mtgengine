"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Wandering Wolf", "Battlebond", "BBD");
  }
}

module.exports = WanderingWolf;
