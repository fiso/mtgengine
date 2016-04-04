"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ostracize extends Card {
  constructor(game) {
    super(game, "Ostracize", "Seventh Edition", "7ED");
  }
}

module.exports = Ostracize;
