"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonscaleBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragonscale Boon", "Ugin's Fate", "UGIN");
  }
}

module.exports = DragonscaleBoon;
