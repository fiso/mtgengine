"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornetHarasser extends Card {
  constructor(game) {
    super(game, "Hornet Harasser", "Lorwyn", "LRW");
  }
}

module.exports = HornetHarasser;
