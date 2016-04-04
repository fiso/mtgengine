"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dissolve extends Card {
  constructor(game) {
    super(game, "Dissolve", "Friday Night Magic", "pFNM");
  }
}

module.exports = Dissolve;
