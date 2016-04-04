"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FightorFlight extends Card {
  constructor(game) {
    super(game, "Fight or Flight", "Invasion", "INV");
  }
}

module.exports = FightorFlight;
