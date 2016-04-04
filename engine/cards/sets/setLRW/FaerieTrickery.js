"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaerieTrickery extends Card {
  constructor(game) {
    super(game, "Faerie Trickery", "Lorwyn", "LRW");
  }
}

module.exports = FaerieTrickery;
