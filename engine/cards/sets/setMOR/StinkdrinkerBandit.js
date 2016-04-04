"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StinkdrinkerBandit extends Card {
  constructor(game) {
    super(game, "Stinkdrinker Bandit", "Morningtide", "MOR");
  }
}

module.exports = StinkdrinkerBandit;
