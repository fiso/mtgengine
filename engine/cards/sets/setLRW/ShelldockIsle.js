"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShelldockIsle extends Card {
  constructor(game) {
    super(game, "Shelldock Isle", "Lorwyn", "LRW");
  }
}

module.exports = ShelldockIsle;
