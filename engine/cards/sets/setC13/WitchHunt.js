"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitchHunt extends Card {
  constructor(game) {
    super(game, "Witch Hunt", "Commander 2013 Edition", "C13");
  }
}

module.exports = WitchHunt;
