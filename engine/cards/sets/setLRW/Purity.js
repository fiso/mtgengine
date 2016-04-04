"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Purity extends Card {
  constructor(game) {
    super(game, "Purity", "Lorwyn", "LRW");
  }
}

module.exports = Purity;
