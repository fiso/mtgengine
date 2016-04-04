"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NectarFaerie extends Card {
  constructor(game) {
    super(game, "Nectar Faerie", "Lorwyn", "LRW");
  }
}

module.exports = NectarFaerie;
