"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForcedFruition extends Card {
  constructor(game) {
    super(game, "Forced Fruition", "Lorwyn", "LRW");
  }
}

module.exports = ForcedFruition;
