"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Kessig extends Card {
  constructor(game) {
    super(game, "Kessig", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Kessig;
