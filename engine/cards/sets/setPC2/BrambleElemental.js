"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrambleElemental extends Card {
  constructor(game) {
    super(game, "Bramble Elemental", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BrambleElemental;
