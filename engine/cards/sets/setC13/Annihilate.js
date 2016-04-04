"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Annihilate extends Card {
  constructor(game) {
    super(game, "Annihilate", "Commander 2013 Edition", "C13");
  }
}

module.exports = Annihilate;
