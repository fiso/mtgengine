"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HallowedHealer extends Card {
  constructor(game) {
    super(game, "Hallowed Healer", "Odyssey", "ODY");
  }
}

module.exports = HallowedHealer;
