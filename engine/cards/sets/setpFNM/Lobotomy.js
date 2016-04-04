"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lobotomy extends Card {
  constructor(game) {
    super(game, "Lobotomy", "Friday Night Magic", "pFNM");
  }
}

module.exports = Lobotomy;
