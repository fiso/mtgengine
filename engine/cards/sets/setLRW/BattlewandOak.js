"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattlewandOak extends Card {
  constructor(game) {
    super(game, "Battlewand Oak", "Lorwyn", "LRW");
  }
}

module.exports = BattlewandOak;
