"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerrasSanctum extends Card {
  constructor(game) {
    super(game, "Serra's Sanctum", "Urza's Saga", "USG");
  }
}

module.exports = SerrasSanctum;
