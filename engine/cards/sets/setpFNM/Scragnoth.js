"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scragnoth extends Card {
  constructor(game) {
    super(game, "Scragnoth", "Friday Night Magic", "pFNM");
  }
}

module.exports = Scragnoth;
