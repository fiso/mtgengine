"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderinDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Wander in Death", "Amonkhet", "AKH");
  }
}

module.exports = WanderinDeath;
