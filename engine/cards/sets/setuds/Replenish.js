"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Replenish extends Card {
  constructor(game) {
    super(game, "Replenish", "Urza's Destiny", "UDS");
  }
}

module.exports = Replenish;
