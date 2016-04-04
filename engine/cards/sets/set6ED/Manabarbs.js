"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Manabarbs extends Card {
  constructor(game) {
    super(game, "Manabarbs", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Manabarbs;
