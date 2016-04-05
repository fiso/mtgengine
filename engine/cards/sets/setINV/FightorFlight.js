"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FightorFlight extends UnimplementedCard {
  constructor(game) {
    super(game, "Fight or Flight", "Invasion", "INV");
  }
}

module.exports = FightorFlight;
