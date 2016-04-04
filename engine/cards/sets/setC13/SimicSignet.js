"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimicSignet extends Card {
  constructor(game) {
    super(game, "Simic Signet", "Commander 2013 Edition", "C13");
  }
}

module.exports = SimicSignet;
