"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Prahv extends Card {
  constructor(game) {
    super(game, "Prahv", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Prahv;
