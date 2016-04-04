"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Disenchant extends Card {
  constructor(game) {
    super(game, "Disenchant", "Anthologies", "ATH");
  }
}

module.exports = Disenchant;
