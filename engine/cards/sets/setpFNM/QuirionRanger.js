"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuirionRanger extends Card {
  constructor(game) {
    super(game, "Quirion Ranger", "Friday Night Magic", "pFNM");
  }
}

module.exports = QuirionRanger;
