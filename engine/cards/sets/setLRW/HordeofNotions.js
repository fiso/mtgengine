"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HordeofNotions extends Card {
  constructor(game) {
    super(game, "Horde of Notions", "Lorwyn", "LRW");
  }
}

module.exports = HordeofNotions;
