"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlabasterPotion extends Card {
  constructor(game) {
    super(game, "Alabaster Potion", "Fifth Edition", "5ED");
  }
}

module.exports = AlabasterPotion;
