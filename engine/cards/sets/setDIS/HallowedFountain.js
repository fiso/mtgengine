"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HallowedFountain extends Card {
  constructor(game) {
    super(game, "Hallowed Fountain", "Dissension", "DIS");
  }
}

module.exports = HallowedFountain;
