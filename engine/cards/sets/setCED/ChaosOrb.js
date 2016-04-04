"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChaosOrb extends Card {
  constructor(game) {
    super(game, "Chaos Orb", "Collector's Edition", "CED");
  }
}

module.exports = ChaosOrb;
