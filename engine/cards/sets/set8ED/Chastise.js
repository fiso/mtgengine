"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chastise extends Card {
  constructor(game) {
    super(game, "Chastise", "Eighth Edition", "8ED");
  }
}

module.exports = Chastise;
