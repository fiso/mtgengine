"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaterwaulingBoggart extends Card {
  constructor(game) {
    super(game, "Caterwauling Boggart", "Lorwyn", "LRW");
  }
}

module.exports = CaterwaulingBoggart;
