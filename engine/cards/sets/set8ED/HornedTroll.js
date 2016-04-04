"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornedTroll extends Card {
  constructor(game) {
    super(game, "Horned Troll", "Eighth Edition", "8ED");
  }
}

module.exports = HornedTroll;
