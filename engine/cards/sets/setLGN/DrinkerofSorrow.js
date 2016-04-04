"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrinkerofSorrow extends Card {
  constructor(game) {
    super(game, "Drinker of Sorrow", "Legions", "LGN");
  }
}

module.exports = DrinkerofSorrow;
