"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HerosResolve extends Card {
  constructor(game) {
    super(game, "Hero's Resolve", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HerosResolve;
