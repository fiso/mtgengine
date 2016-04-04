"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntedTroll extends Card {
  constructor(game) {
    super(game, "Hunted Troll", "Commander 2013 Edition", "C13");
  }
}

module.exports = HuntedTroll;
