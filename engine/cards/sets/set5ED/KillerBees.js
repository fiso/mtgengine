"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KillerBees extends Card {
  constructor(game) {
    super(game, "Killer Bees", "Fifth Edition", "5ED");
  }
}

module.exports = KillerBees;
