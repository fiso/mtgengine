"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightfallPredator extends Card {
  constructor(game) {
    super(game, "Nightfall Predator", "Innistrad", "ISD");
  }
}

module.exports = NightfallPredator;
