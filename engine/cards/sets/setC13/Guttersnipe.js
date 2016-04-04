"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Guttersnipe extends Card {
  constructor(game) {
    super(game, "Guttersnipe", "Commander 2013 Edition", "C13");
  }
}

module.exports = Guttersnipe;
