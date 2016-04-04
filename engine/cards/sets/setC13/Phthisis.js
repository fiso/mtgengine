"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Phthisis extends Card {
  constructor(game) {
    super(game, "Phthisis", "Commander 2013 Edition", "C13");
  }
}

module.exports = Phthisis;
