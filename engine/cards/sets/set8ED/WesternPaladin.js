"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WesternPaladin extends Card {
  constructor(game) {
    super(game, "Western Paladin", "Eighth Edition", "8ED");
  }
}

module.exports = WesternPaladin;
