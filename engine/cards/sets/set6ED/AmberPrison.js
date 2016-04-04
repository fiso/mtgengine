"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AmberPrison extends Card {
  constructor(game) {
    super(game, "Amber Prison", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AmberPrison;
