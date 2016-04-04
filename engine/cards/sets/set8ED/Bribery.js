"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bribery extends Card {
  constructor(game) {
    super(game, "Bribery", "Eighth Edition", "8ED");
  }
}

module.exports = Bribery;
