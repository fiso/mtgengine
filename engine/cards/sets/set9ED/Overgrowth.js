"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Overgrowth extends Card {
  constructor(game) {
    super(game, "Overgrowth", "Ninth Edition", "9ED");
  }
}

module.exports = Overgrowth;
