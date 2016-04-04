"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AllyEncampment extends Card {
  constructor(game) {
    super(game, "Ally Encampment", "Battle for Zendikar", "BFZ");
  }
}

module.exports = AllyEncampment;
