"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NornsDominion extends Card {
  constructor(game) {
    super(game, "Norn's Dominion", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = NornsDominion;
