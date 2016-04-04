"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EasternPaladin extends Card {
  constructor(game) {
    super(game, "Eastern Paladin", "Eighth Edition", "8ED");
  }
}

module.exports = EasternPaladin;
