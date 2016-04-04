"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemporalAdept extends Card {
  constructor(game) {
    super(game, "Temporal Adept", "Eighth Edition", "8ED");
  }
}

module.exports = TemporalAdept;
