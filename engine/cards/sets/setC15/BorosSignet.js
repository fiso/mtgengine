"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorosSignet extends Card {
  constructor(game) {
    super(game, "Boros Signet", "Commander 2015", "C15");
  }
}

module.exports = BorosSignet;
