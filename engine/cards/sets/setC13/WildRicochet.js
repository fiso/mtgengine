"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildRicochet extends Card {
  constructor(game) {
    super(game, "Wild Ricochet", "Commander 2013 Edition", "C13");
  }
}

module.exports = WildRicochet;
