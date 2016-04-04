"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlagueSpitter extends Card {
  constructor(game) {
    super(game, "Plague Spitter", "Invasion", "INV");
  }
}

module.exports = PlagueSpitter;
