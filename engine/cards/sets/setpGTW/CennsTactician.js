"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CennsTactician extends Card {
  constructor(game) {
    super(game, "Cenn's Tactician", "Gateway", "pGTW");
  }
}

module.exports = CennsTactician;
