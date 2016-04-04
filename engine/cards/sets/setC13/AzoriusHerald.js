"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AzoriusHerald extends Card {
  constructor(game) {
    super(game, "Azorius Herald", "Commander 2013 Edition", "C13");
  }
}

module.exports = AzoriusHerald;
