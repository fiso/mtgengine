"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuraThief extends Card {
  constructor(game) {
    super(game, "Aura Thief", "Urza's Destiny", "UDS");
  }
}

module.exports = AuraThief;
