"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CennsHeir extends Card {
  constructor(game) {
    super(game, "Cenn's Heir", "Lorwyn", "LRW");
  }
}

module.exports = CennsHeir;
