"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SealofStrength extends Card {
  constructor(game) {
    super(game, "Seal of Strength", "Nemesis", "NMS");
  }
}

module.exports = SealofStrength;
