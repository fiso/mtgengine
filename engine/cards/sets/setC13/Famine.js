"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Famine extends Card {
  constructor(game) {
    super(game, "Famine", "Commander 2013 Edition", "C13");
  }
}

module.exports = Famine;
