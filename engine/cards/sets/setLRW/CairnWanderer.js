"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CairnWanderer extends Card {
  constructor(game) {
    super(game, "Cairn Wanderer", "Lorwyn", "LRW");
  }
}

module.exports = CairnWanderer;
