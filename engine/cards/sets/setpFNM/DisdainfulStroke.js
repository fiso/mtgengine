"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DisdainfulStroke extends Card {
  constructor(game) {
    super(game, "Disdainful Stroke", "Friday Night Magic", "pFNM");
  }
}

module.exports = DisdainfulStroke;
