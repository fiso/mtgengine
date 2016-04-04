"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Facevaulter extends Card {
  constructor(game) {
    super(game, "Facevaulter", "Lorwyn", "LRW");
  }
}

module.exports = Facevaulter;
