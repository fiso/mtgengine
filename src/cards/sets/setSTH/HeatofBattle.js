"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeatofBattle extends UnimplementedCard {
  constructor (game) {
    super(game, "Heat of Battle", "Stronghold", "STH");
  }
}

module.exports = HeatofBattle;
