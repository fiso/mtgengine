"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CitadelofPain extends Card {
  constructor(game) {
    super(game, "Citadel of Pain", "Prophecy", "PCY");
  }
}

module.exports = CitadelofPain;
