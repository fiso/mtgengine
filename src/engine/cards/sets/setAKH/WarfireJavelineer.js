"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarfireJavelineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Warfire Javelineer", "Amonkhet", "AKH");
  }
}

module.exports = WarfireJavelineer;
