"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Exhaustion extends Card {
  constructor(game) {
    super(game, "Exhaustion", "Ninth Edition", "9ED");
  }
}

module.exports = Exhaustion;
