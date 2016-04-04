"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrapfindersTrick extends Card {
  constructor(game) {
    super(game, "Trapfinder's Trick", "Zendikar", "ZEN");
  }
}

module.exports = TrapfindersTrick;
