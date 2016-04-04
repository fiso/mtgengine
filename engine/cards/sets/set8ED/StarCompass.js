"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StarCompass extends Card {
  constructor(game) {
    super(game, "Star Compass", "Eighth Edition", "8ED");
  }
}

module.exports = StarCompass;
