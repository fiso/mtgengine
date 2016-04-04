"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cultivate extends Card {
  constructor(game) {
    super(game, "Cultivate", "Commander 2013 Edition", "C13");
  }
}

module.exports = Cultivate;
