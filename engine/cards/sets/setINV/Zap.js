"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Zap extends Card {
  constructor(game) {
    super(game, "Zap", "Invasion", "INV");
  }
}

module.exports = Zap;
