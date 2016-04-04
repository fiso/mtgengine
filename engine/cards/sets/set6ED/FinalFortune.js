"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FinalFortune extends Card {
  constructor(game) {
    super(game, "Final Fortune", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FinalFortune;
