"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SisaysRing extends Card {
  constructor(game) {
    super(game, "Sisay's Ring", "Seventh Edition", "7ED");
  }
}

module.exports = SisaysRing;
