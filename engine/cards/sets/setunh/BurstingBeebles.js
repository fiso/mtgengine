"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurstingBeebles extends Card {
  constructor(game) {
    super(game, "Bursting Beebles", "Unhinged", "UNH");
  }
}

module.exports = BurstingBeebles;
