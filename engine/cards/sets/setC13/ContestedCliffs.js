"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ContestedCliffs extends Card {
  constructor(game) {
    super(game, "Contested Cliffs", "Commander 2013 Edition", "C13");
  }
}

module.exports = ContestedCliffs;
