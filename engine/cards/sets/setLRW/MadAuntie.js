"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MadAuntie extends Card {
  constructor(game) {
    super(game, "Mad Auntie", "Lorwyn", "LRW");
  }
}

module.exports = MadAuntie;
