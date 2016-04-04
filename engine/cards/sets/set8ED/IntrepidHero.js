"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntrepidHero extends Card {
  constructor(game) {
    super(game, "Intrepid Hero", "Eighth Edition", "8ED");
  }
}

module.exports = IntrepidHero;
