"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalefulStare extends Card {
  constructor(game) {
    super(game, "Baleful Stare", "Ninth Edition", "9ED");
  }
}

module.exports = BalefulStare;
