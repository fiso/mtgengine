"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FinalPunishment extends Card {
  constructor(game) {
    super(game, "Final Punishment", "Ninth Edition", "9ED");
  }
}

module.exports = FinalPunishment;
