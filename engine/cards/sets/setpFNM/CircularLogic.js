"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CircularLogic extends Card {
  constructor(game) {
    super(game, "Circular Logic", "Friday Night Magic", "pFNM");
  }
}

module.exports = CircularLogic;
