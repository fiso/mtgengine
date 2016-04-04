"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nephalia extends Card {
  constructor(game) {
    super(game, "Nephalia", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Nephalia;
