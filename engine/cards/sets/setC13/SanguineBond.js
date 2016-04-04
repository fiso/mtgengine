"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SanguineBond extends Card {
  constructor(game) {
    super(game, "Sanguine Bond", "Commander 2013 Edition", "C13");
  }
}

module.exports = SanguineBond;
