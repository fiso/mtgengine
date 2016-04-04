"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeeBeyond extends Card {
  constructor(game) {
    super(game, "See Beyond", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SeeBeyond;
