"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SageAven extends Card {
  constructor(game) {
    super(game, "Sage Aven", "Ninth Edition", "9ED");
  }
}

module.exports = SageAven;
