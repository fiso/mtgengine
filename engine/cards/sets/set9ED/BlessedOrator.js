"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlessedOrator extends Card {
  constructor(game) {
    super(game, "Blessed Orator", "Ninth Edition", "9ED");
  }
}

module.exports = BlessedOrator;
