"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HillcomberGiant extends Card {
  constructor(game) {
    super(game, "Hillcomber Giant", "Lorwyn", "LRW");
  }
}

module.exports = HillcomberGiant;
