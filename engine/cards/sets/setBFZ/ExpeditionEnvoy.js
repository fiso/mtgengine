"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExpeditionEnvoy extends Card {
  constructor(game) {
    super(game, "Expedition Envoy", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ExpeditionEnvoy;
