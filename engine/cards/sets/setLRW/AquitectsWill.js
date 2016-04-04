"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AquitectsWill extends Card {
  constructor(game) {
    super(game, "Aquitect's Will", "Lorwyn", "LRW");
  }
}

module.exports = AquitectsWill;
