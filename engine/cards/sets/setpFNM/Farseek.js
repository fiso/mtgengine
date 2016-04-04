"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Farseek extends Card {
  constructor(game) {
    super(game, "Farseek", "Friday Night Magic", "pFNM");
  }
}

module.exports = Farseek;
